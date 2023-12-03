module.exports = (sequelize, Sequelize) => {
    const Crud = sequelize.define("Crud", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Crud;
  };