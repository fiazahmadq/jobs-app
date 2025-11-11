export async function GET(req, { params }) {
  const { id } = params;

  try {
    const res = await fetch(`https://remotive.com/api/remote-jobs/job/${id}`);

    // Check if the response is OK
    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `Remotive API returned status ${res.status}` }),
        { status: res.status }
      );
    }

    const data = await res.json();

    const jobData = data.job || data;

    return new Response(JSON.stringify(jobData), { status: 200 });
  } catch (err) {
    console.error("API Route Error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch job from Remotive" }),
      { status: 500 }
    );
  }
}
