import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import TableSkeleton from '../components/TableSkeleton';
import './css/Dashboard.css';

export default function Dashboard() {
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) return <TableSkeleton rows={3} columns={3} />;
  if (error) return <p className="dashboard__error">خطأ: {error}</p>;

  const totalUsers = users.length;
  const uniqueCities = new Set(users.map((u) => u.address.city)).size;
  const uniqueCompanies = new Set(users.map((u) => u.company.name)).size;

  const stats = [
    { label: 'إجمالي الموظفين', value: totalUsers, percent: 85 },
    { label: 'عدد المدن', value: uniqueCities, percent: 65 },
    { label: 'عدد الشركات', value: uniqueCompanies, percent: 45 },
  ];

  // التاريخ الحالي
  const today = new Date().toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">لوحة التحكم</h1>

      <div className="dashboard__body">
        {/* القسم الأيسر: ترحيب */}
        <div className="welcome-card">
          <div className="welcome-card__greeting">مرحبًا </div>
          <div className="welcome-card__name">Fatma</div>
          <div className="welcome-card__date">{today}</div>

          <div className="welcome-card__divider" />

          <p className="welcome-card__summary">
            عندك <strong>{totalUsers}</strong> موظفًا موزّعين على{' '}
            <strong>{uniqueCities}</strong> مدينة، يعملون في{' '}
            <strong>{uniqueCompanies}</strong> شركة.
          </p>
        </div>

        {/* القسم الأيمن: الإحصائيات */}
        <div className="stats-list">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-item__header">
                <span className="stat-item__label">{stat.label}</span>
                <span className="stat-item__value">{stat.value}</span>
              </div>
              <div className="stat-bar">
                <div
                  className="stat-bar__fill"
                  style={{
                    width: animate ? `${stat.percent}%` : '0%',
                    transitionDelay: `${index * 0.15}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}