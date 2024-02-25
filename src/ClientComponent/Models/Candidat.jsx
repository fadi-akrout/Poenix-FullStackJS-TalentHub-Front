import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getCandidates = async() => {
            const response = await axios.get('/api/candidates');
            setCandidates(response.data);
        };
        getCandidates();
    }, []);

    return  (
        <div>
            {candidates.map(candidate => (
                <div key={candidate._id}>{candidate.name}</div>
            ))}
        </div>
    );
};

export default Candidates;