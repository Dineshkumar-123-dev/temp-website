'use client';

import { useState } from 'react';

const mockOrders = [
  { id: 'LUM-10023', date: '2026-04-15', status: 'Delivered', total: 249 },
  { id: 'LUM-10019', date: '2026-03-28', status: 'Delivered', total: 548 },
  { id: 'LUM-10031', date: '2026-05-01', status: 'Shipped', total: 199 },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="account-page" style={{ paddingTop: '120px', paddingBottom: 'var(--space-xl)' }}>
      <div className="container">
        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <div className="account-avatar-section">
              <div className="account-avatar">JS</div>
              <div>
                <h3 style={{ fontWeight: 600 }}>John Smith</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>john@example.com</p>
              </div>
            </div>
            <nav className="account-nav">
              {[
                { key: 'profile', label: 'Profile', icon: '👤' },
                { key: 'orders', label: 'Orders', icon: '📦' },
                { key: 'wishlist', label: 'Wishlist', icon: '♡' },
                { key: 'settings', label: 'Settings', icon: '⚙' },
              ].map(tab => (
                <button
                  key={tab.key}
                  className={`account-nav-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <span>{tab.icon}</span> {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="account-content">
            {activeTab === 'profile' && (
              <div className="account-panel animate-fade-in">
                <h2 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>My Profile</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input defaultValue="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input defaultValue="Smith" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" defaultValue="+1 (555) 000-1234" />
                </div>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="account-panel animate-fade-in">
                <h2 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>Order History</h2>
                <div className="orders-list">
                  {mockOrders.map(order => (
                    <div key={order.id} className="order-card glass">
                      <div className="order-card-top">
                        <div>
                          <p style={{ fontWeight: 600 }}>{order.id}</p>
                          <p className="text-muted" style={{ fontSize: '0.875rem' }}>{order.date}</p>
                        </div>
                        <span className={`order-status status-${order.status.toLowerCase()}`}>{order.status}</span>
                        <p style={{ fontWeight: 600, fontSize: '1.125rem' }}>${order.total}</p>
                        <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>View</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="account-panel animate-fade-in">
                <h2 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>Wishlist</h2>
                <div className="wishlist-empty glass" style={{ padding: 'var(--space-xl)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                  <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>♡</p>
                  <p className="text-muted">Your wishlist is empty.</p>
                  <a href="/shop" className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Discover Products</a>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="account-panel animate-fade-in">
                <h2 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>Settings</h2>
                <div className="settings-section">
                  <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Security</h4>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                  <button className="btn btn-primary">Update Password</button>
                </div>
                <div className="settings-section" style={{ marginTop: 'var(--space-xl)', borderTop: '1px solid var(--border)', paddingTop: 'var(--space-xl)' }}>
                  <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Notifications</h4>
                  <label className="toggle-row">
                    <span>Order updates</span>
                    <input type="checkbox" defaultChecked className="toggle-input" />
                  </label>
                  <label className="toggle-row">
                    <span>Promotions & offers</span>
                    <input type="checkbox" className="toggle-input" />
                  </label>
                  <label className="toggle-row">
                    <span>New arrivals</span>
                    <input type="checkbox" defaultChecked className="toggle-input" />
                  </label>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
