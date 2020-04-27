const connection = require("../../../database/connection");

module.exports = {
  async create(request, response) {
    try {
      const { title, description, value } = request.body;
      const ong_id = request.headers.authorization;

      const data = {
        title: title.toUpperCase(),
        description: description.toUpperCase(),
        value,
        ong_id,
      };

      const [id] = await connection("incidents").insert(data);

      return response.json({ id });
    } catch (e) {
      console.log(e);
      return response
        .status(400)
        .send({ message: "Falha ao criar incidente!", error: e });
    }
  },

  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("incidents").count();
    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ]);

    response.header("X-Total-Count", count["count(*)"]);
    return response.json(incidents);
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (!incident) {
      return response.status(401).json({ error: "Registro inexistente!" });
    }

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operação não permitida!" });
    }

    await connection("incidents").where("id", id).delete();

    return response.status(200).send();
  },
};
