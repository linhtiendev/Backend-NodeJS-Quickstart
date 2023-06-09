"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [
            {
                email: "admin@gmail.com",
                password: "123456", //plain text // mk dc nhap goi la hash password
                firstName: "linhtien",
                lastName: "dev",
                address: "LAIVUNG",
                phoneNumber: "070707070707",
                gender: 1,
                image: "http//1212312312",
                roleId: "ROLE",
                positionId: "R1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
