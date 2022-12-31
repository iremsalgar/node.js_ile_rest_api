const app = require("express")();
const veri = require("./veri.json");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  res.send(200, veri);
});

app.get("/users/:id", (req, res) => {
  if (isNaN(req.params.id)) 
  {
    res.send(400, {
      message: "İşlenemeyen veri"
    });
  } 
  else 
  {
    const user = veri.find(u => u.id == req.params.id);
    if (user) 
    {
      res.send(200, user);
    } 
    else 
    {
      res.send(404, {
        message: "Kullanici bulunamadi"
      });
    }
  }
});

app.post("/users", (req, res) => {
    console.log(req.body);
  const willSaveData = {
    id: new Date().getTime(),
    full_name: req.body.full_name,
    country: req.body.country,
    email: req.body.email,
    created_at: new Date()
  };
  veri.push(willSaveData);
  res.send(willSaveData);
});

app.patch("/users/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: "İşlenemeyen veri"
    });
  } else {
    const user = veri.find(u => u.id == req.params.id);
    if (user) {
      Object.keys(req.body).forEach(key => {
        user[key] = req.body[key];
      });
      res.send(200, user);
    } 
    else {
      res.send(404, {
        message: "Kullanici bulunamadi"
      });
    }
  }
});

app.delete("/users/:id", (req, res) => {
  if (isNaN(req.params.id)) 
  {
    res.send(400, {
      message: "İşlenemeyen veri"
    });
  } 
  else 
  {
    const userIndex = veri.findIndex(u => u.id == req.params.id);
    if (userIndex > -1) 
    {
      veri.splice(userIndex, 1);
      res.send(201, {
        message: "Kullanici yok edildi"
      });
    } 
    else 
    {
      res.send(404, {
        message: "Kullanici bulunamadi"
      });
    }
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Sunucu tin tin çalişiyor");
});