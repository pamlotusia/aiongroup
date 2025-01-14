return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Monitoramento de Debêntures
      </Typography>
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 3 }}>
        {debentures.map((d, index) => (
          <Card key={index} sx={{ minWidth: 300, padding: 2 }}>
            <CardContent>
              <Typography variant="h6">{d.emissor}</Typography>
              <Typography>Rentabilidade: {d.rendimento}</Typography>
              <Typography>Risco: {d.risco}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
