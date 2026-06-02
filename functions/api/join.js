export async function onRequestPost({ request, env }) {
  const endpoint = env.JOIN_FORM_ENDPOINT;

  if (!endpoint) {
    return Response.json(
      { ok: false, error: "JOIN_FORM_ENDPOINT is not configured." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  formData.append("submitted_at", new Date().toISOString());
  formData.append("source", "outat.co.uk/join");

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return Response.json(
      { ok: false, error: "Endpoint rejected the submission." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}

export async function onRequest() {
  return Response.json(
    { ok: false, error: "Method not allowed." },
    { status: 405 }
  );
}
