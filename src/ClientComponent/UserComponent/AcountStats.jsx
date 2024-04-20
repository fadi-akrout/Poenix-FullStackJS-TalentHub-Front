import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Header from "../../ClientComponent/HomePage/Header";
import Footer from "../../ClientComponent/Dashboard/Footer";

const AcountStats = () => {
  const [accountStats, setAccountStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountStats = async () => {
      try {
        const response = await fetch('http://localhost:3500/stat/api/accounts-statistics');
        if (!response.ok) {
          throw new Error('Error fetching account stats');
        }
        const data = await response.json();
        setAccountStats(data);
      } catch (err) {
        console.error('Error fetching account stats:', err);
        setError(err.message);
      }
    };

    fetchAccountStats();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!accountStats) {
    return <div>Loading...</div>;
  }

  const { studentCount, userCount, staffCount, AlumniCount, RecruiterCount } = accountStats;

  const pieChartData = [
    { id: 0, value: studentCount, label: 'Students', labelColor: 'white' },
    { id: 1, value: userCount, label: 'Users', labelColor: 'white' },
    { id: 2, value: staffCount, label: 'Teachers', labelColor: 'white' },
    { id: 3, value: AlumniCount, label: 'Alumnis', labelColor: 'white' },
    { id: 4, value: RecruiterCount, label: 'Recruiters', labelColor: 'white' },
  ];

  return (
    <div>
      <Header />
      <section className="contact-us grid grid-cols-2 gap-4 h-[calc(100vh-4rem)]" id="contact">
        <div className="flex justify-center items-center">
          <h1>chart</h1>
        </div>
        <div className="bg-gray-900 text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Account Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-white">Students: {studentCount}</h3>
              <h3 className="text-white">Users: {userCount}</h3>
              <h3 className="text-white">Teachers: {staffCount}</h3>
              <h3 className="text-white">Alumnis: {AlumniCount}</h3>
              <h3 className="text-white">Recruiters: {RecruiterCount}</h3>
            </div>
            <div className="mt-4">
              <PieChart
                series={[
                  {
                    data: pieChartData,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -100, color: 'gray', labelColor: 'white' },
                  },
                ]}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="upcoming-meetings" id="meetings">
        <Footer />
      </section>
    </div>
  );
};

export default AcountStats;