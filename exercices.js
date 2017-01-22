var exercices = [{
    "vAlea": 0,
    "vReponse": 0,
    "consigne": function() {
      this.vAlea = ceil(random(1000));
      return "Combien font " + nfFr(this.vAlea) + " g en kg ?";

    },
    "correction": function() {
      this.vReponse = this.vAlea / 1000;
      return nfFr(this.vAlea) + " g font " + nfFr(this.vReponse) + " kg."

    }
  },
  {
    "vAlea": 0,
    "vReponse": 0,
    "consigne": function() {
      this.vAlea = ceil(random(1000));
      return "Combien font " + nfFr(this.vAlea) + " mg en g ?";

    },
    "correction": function() {
      this.vReponse = this.vAlea / 1000;
      return nfFr(this.vAlea) + " mg font " + nfFr(this.vReponse) + " g."

    }

  },
  {
    "vAlea": 0,
    "vReponse": 0,
    "consigne": function() {
      this.vAlea = ceil(random(1000));
      return "Combien font " + nfFr(this.vAlea) + " dg en g ?";

    },
    "correction": function() {
      this.vReponse = this.vAlea / 10;
      return nfFr(this.vAlea) + " dg font " + nfFr(this.vReponse) + " g."

    }

  }
]
