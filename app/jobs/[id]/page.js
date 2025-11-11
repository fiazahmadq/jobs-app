"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`/api/job/${id}`) // use proxy API route
      .then(res => res.json())
      .then(data => setJob(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!job) return <div>Loading job details...</div>;

  return (
    <div>
      <Link href="/jobs">← Back to Jobs</Link>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>
        <strong>Company:</strong> {job.company_name}
      </p>
      <p>
        <strong>Location:</strong> {job.candidate_required_location}
      </p>
      <a href={job.url} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
}
