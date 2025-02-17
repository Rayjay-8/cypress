import express from 'express'
import { exec } from "child_process"

const app = express();

app.use(express.json());

app.get("/api/test/:testId", (req, res) => {
    const { testId } = req.params;
    

    if (!testId ) {
        return res.status(400).json({ error: "Test ID and ID parameter are required" });
    }

    // Define o nome do arquivo com base no testId
  const testFile = `cypress/e2e/${testId}.cy.js`;

  // Comando para rodar o Cypress
  const cypressCommand = `yarn cypress run --spec "${testFile}"`;

  // Executa o Cypress
  exec(cypressCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Cypress: ${error.message}`);
      return res.status(500).json({ error: "Failed to run tests" });
    }

    console.log(`Cypress Output: ${stdout}`);
    if (stderr) {
      console.error(`Cypress Errors: ${stderr}`);
    }

    // Responde com o resultado do teste
    res.json({ message: "Tests executed", result: stdout });
  });
});

app.post("/api/test/:testId", (req, res) => {
    const { testId } = req.params;
    const { id } = req.body;

    if (!testId || !id) {
        return res.status(400).json({ error: "Test ID and ID parameter are required" });
    }

    // Define o nome do arquivo com base no testId
  const testFile = `cypress/e2e/${testId}.cy.js`;

  // Comando para rodar o Cypress
  const cypressCommand = `yarn cypress run --env id=${id} --spec "${testFile}"`;

  // Executa o Cypress
  exec(cypressCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Cypress: ${error.message}`);
      return res.status(500).json({ error: "Failed to run tests" });
    }

    console.log(`Cypress Output: ${stdout}`);
    if (stderr) {
      console.error(`Cypress Errors: ${stderr}`);
    }

    // Responde com o resultado do teste
    res.json({ message: "Tests executed", id, result: stdout });
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
