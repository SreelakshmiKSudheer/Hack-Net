import React, { useState } from 'react';

const dummyRequests = [
  {
    id: 1,
    venue: 'Auditorium',
    date: '2025-08-10',
    time: '10:00 AM - 12:00 PM',
    requester: 'John Doe',
  },
  {
    id: 2,
    venue: 'Seminar Hall',
    date: '2025-08-11',
    time: '02:00 PM - 04:00 PM',
    requester: 'Jane Smith',
  },
];

const FacultyHome = () => {
  const [requests, setRequests] = useState(dummyRequests);
  const [rejectionComments, setRejectionComments] = useState({});

  const handleApprove = (id) => {
    alert(`Approved request #${id}`);
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  const handleReject = (id) => {
    const comment = rejectionComments[id] || '';
    alert(`Rejected request #${id} with comment: ${comment}`);
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  const handleCommentChange = (id, value) => {
    setRejectionComments(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Booking Requests</h2>
      {requests.length === 0 ? (
        <p className="text-gray-600">No pending requests.</p>
      ) : (
        requests.map((req) => (
          <div key={req.id} className="bg-white shadow-md rounded p-4 mb-4 border">
            <p><strong>Venue:</strong> {req.venue}</p>
            <p><strong>Date:</strong> {req.date}</p>
            <p><strong>Time:</strong> {req.time}</p>
            <p><strong>Requester:</strong> {req.requester}</p>

            <div className="mt-4 flex flex-col gap-2">
              <button
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 w-fit"
                onClick={() => handleApprove(req.id)}
              >
                Approve
              </button>

              <textarea
                placeholder="Reason for rejection (optional)"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={rejectionComments[req.id] || ''}
                onChange={(e) => handleCommentChange(req.id, e.target.value)}
              />

              <button
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 w-fit"
                onClick={() => handleReject(req.id)}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FacultyHome;
