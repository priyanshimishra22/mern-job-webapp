import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ResumeModal from './ResumeModal';

const MyApplications = () => {
  const [application, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState('');
  const { user, isAuthorized } = useContext(Context);

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (user && user.role === 'Employer') {
          const res = await axios.get('http://localhost:4000/api/v1/application/employer/getall', { withCredentials: true });
          setApplications(res.data.applications);
        } else {
          const res = await axios.get('http://localhost:4000/api/v1/application/jobseeker/getall', { withCredentials: true });
          setApplications(res.data.applications);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
    };

    if (isAuthorized) {
      fetchApplications();
    } else {
      navigateTo('/login');
    }
  }, [isAuthorized, user, navigateTo]);

  const deleteApplication = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/v1/application/delete/${id}`, { withCredentials: true });
      toast.success(res.data.message);
      setApplications(prevApplications => prevApplications.filter(application => application._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      {user && user.role === 'Job Seeker' ? (
        <div className="container">
          <h3>My Applications</h3>
          {application.length <= 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            application.map((element) => (
              <JobSeekerCard
                element={element}
                key={element._id}
                deleteApplication={deleteApplication}
                openModal={openModal}
              />
            ))
          )}
        </div>
      ) : (
        <div className="container">
          <h3>Applications From Job Seekers</h3>
          {application.map((element) => (
            <EmployerCard
              element={element}
              key={element._id}
              openModal={openModal}
            />
          ))}
        </div>
      )}
      {modalOpen && (
        <ResumeModal
          imageUrl={resumeImageUrl}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p><span>Name:</span> {element.name}</p>
        <p><span>Email:</span> {element.email}</p>
        <p><span>Phone:</span> {element.phone}</p>
        <p><span>Address:</span> {element.address}</p>
        <p><span>Cover Letter:</span> {element.coverLetter}</p>
      </div>
      <div className="resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
      <div className="btn_area">
        <button onClick={() => deleteApplication(element._id)}>Delete Application</button>
      </div>
    </div>
  );
};

const EmployerCard = ({ element, openModal }) => {
  return (
    <div className="employer_card">
      <div className="detail">
        <p><span>Name:</span> {element.name}</p>
        <p><span>Email:</span> {element.email}</p>
        <p><span>Phone:</span> {element.phone}</p>
        <p><span>Address:</span> {element.address}</p>
        <p><span>Cover Letter:</span> {element.coverLetter}</p>
      </div>
      <div className="resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
    </div>
  );
};

export default MyApplications;
