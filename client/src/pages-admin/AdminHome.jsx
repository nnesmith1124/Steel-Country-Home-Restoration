import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarAdmin from "../Components/NavBar-Admin";
import Footer from "../Components/Footer";
import "./AdminDashboard.css";

export default function Admin() {
  // State for services and inquiries
  const [services, setServices] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState({ services: true, inquiries: true });
  const [error, setError] = useState({ services: null, inquiries: null });

  // Stats for dashboard
  const [stats, setStats] = useState({
    totalServices: 0,
    totalInquiries: 0,
    recentInquiries: 0,
    popularService: { name: "None", count: 0 }
  });

  // Fetch data on component mount
  useEffect(() => {
    fetchServices();
    fetchInquiries();
  }, []);

  // Calculate stats when data changes
  useEffect(() => {
    if (!loading.services && !loading.inquiries) {
      calculateStats();
    }
  }, [services, inquiries, loading]);

  // Fetch all services
  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setServices(data.result || []);
      setError({ ...error, services: null });
    } catch (err) {
      setError({ ...error, services: err.message });
      console.error("Error fetching services:", err);
    } finally {
      setLoading({ ...loading, services: false });
    }
  };

  // Fetch all inquiries
  const fetchInquiries = async () => {
    try {
      const response = await fetch("/api/inquiries");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setInquiries(data.result || []);
      setError({ ...error, inquiries: null });
    } catch (err) {
      setError({ ...error, inquiries: err.message });
      console.error("Error fetching inquiries:", err);
    } finally {
      setLoading({ ...loading, inquiries: false });
    }
  };

  // Calculate dashboard statistics
  const calculateStats = () => {
    // Get total counts
    const totalServices = services.length;
    const totalInquiries = inquiries.length;

    // Count recent inquiries (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentInquiries = inquiries.filter(inquiry => {
      const inquiryDate = new Date(inquiry.createdAt);
      return inquiryDate >= thirtyDaysAgo;
    }).length;

    // Find most popular service based on inquiries
    const serviceCounts = {};
    inquiries.forEach(inquiry => {
      if (inquiry.service) {
        serviceCounts[inquiry.service] = (serviceCounts[inquiry.service] || 0) + 1;
      }
    });

    let popularService = { name: "None", count: 0 };
    Object.keys(serviceCounts).forEach(service => {
      if (serviceCounts[service] > popularService.count) {
        popularService = {
          name: service.charAt(0).toUpperCase() + service.slice(1),
          count: serviceCounts[service]
        };
      }
    });

    setStats({
      totalServices,
      totalInquiries,
      recentInquiries,
      popularService
    });
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Capitalize service name
  const capitalizeService = (service) => {
    if (!service) return "N/A";
    return service.charAt(0).toUpperCase() + service.slice(1);
  };

  return (
    <div className="admin-dashboard">
      <NavBarAdmin />

      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        {/* Summary Stats */}
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Services</h3>
            <p className="stat-number">{stats.totalServices}</p>
            <Link to="/admin/services" className="stat-link">View All</Link>
          </div>

          <div className="stat-card">
            <h3>Total Inquiries</h3>
            <p className="stat-number">{stats.totalInquiries}</p>
            <Link to="/admin/inquiries" className="stat-link">View All</Link>
          </div>

          <div className="stat-card">
            <h3>Recent Inquiries</h3>
            <p className="stat-number">{stats.recentInquiries}</p>
            <p className="stat-subtitle">Last 30 days</p>
          </div>

          <div className="stat-card">
            <h3>Popular Service</h3>
            <p className="stat-highlight">{stats.popularService.name}</p>
            <p className="stat-subtitle">{stats.popularService.count} inquiries</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>

          <div className="activity-columns">
            {/* Recent Services */}
            <div className="activity-card">
              <div className="card-header">
                <h3>Recent Services</h3>
                <Link to="/admin/services" className="view-all">View All</Link>
              </div>

              {loading.services ? (
                <p className="loading-text">Loading services...</p>
              ) : error.services ? (
                <p className="error-text">Error: {error.services}</p>
              ) : services.length === 0 ? (
                <p className="empty-text">No services found</p>
              ) : (
                <ul className="activity-list">
                  {services.slice(0, 5).map(service => (
                    <li key={service._id} className="activity-item">
                      <div className="service-item">
                        <div className="service-image">
                          {service.imageUrl ? (
                            <img src={service.imageUrl} alt={service.name} />
                          ) : (
                            <div className="image-placeholder"></div>
                          )}
                        </div>
                        <div className="service-details">
                          <h4>{service.name}</h4>
                          <p>{service.description.substring(0, 60)}...</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <Link to="/admin/services/new" className="action-button">
                Add New Service
              </Link>
            </div>

            {/* Recent Inquiries */}
            <div className="activity-card">
              <div className="card-header">
                <h3>Recent Inquiries</h3>
                <Link to="/admin/inquiries" className="view-all">View All</Link>
              </div>

              {loading.inquiries ? (
                <p className="loading-text">Loading inquiries...</p>
              ) : error.inquiries ? (
                <p className="error-text">Error: {error.inquiries}</p>
              ) : inquiries.length === 0 ? (
                <p className="empty-text">No inquiries found</p>
              ) : (
                <ul className="activity-list">
                  {inquiries.slice(0, 5).map(inquiry => (
                    <li key={inquiry._id} className="activity-item">
                      <div className="inquiry-item">
                        <div className="inquiry-icon">
                          <span className="material-icons">person</span>
                        </div>
                        <div className="inquiry-details">
                          <h4>{inquiry.name}</h4>
                          <p className="inquiry-meta">
                            <span>{capitalizeService(inquiry.service)}</span>
                            <span className="date">{formatDate(inquiry.createdAt)}</span>
                          </p>
                          <p className="inquiry-contact">{inquiry.email} | {inquiry.phone}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <Link to="/admin/inquiries" className="action-button">
                Manage Inquiries
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}