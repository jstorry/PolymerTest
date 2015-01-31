
    Polymer({
      owner: "Daniel",
      ready: function() {
        this.$.el.textContent = this.owner +
                                " is ready!";
      }
    });
  