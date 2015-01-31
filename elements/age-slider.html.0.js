
    Polymer({
      age: 25,
      name: "Daniel",
      color: "red",
      owner: "Eric",
      nameChanged: function() {
        if (this.name) {
          // Ensure name is capitalized
          this.name = this.name[0].toUpperCase() +
                      this.name.slice(1);
        }
      }
    });
