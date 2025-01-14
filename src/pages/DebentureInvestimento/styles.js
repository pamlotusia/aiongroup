return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Simulação de Investimentos
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
        <TextField
          label="Valor do Investimento"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <TextField
          label="Taxa de Juros (%)"
          type="number"
          value={taxa}
          onChange={(e) => setTaxa(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={calcularInvestimento}>
          Simular
        </Button>
        {resultado && <Typography>Resultado: R$ {resultado.toFixed(2)}</Typography>}
      </Box>
    </Container>
  );

  