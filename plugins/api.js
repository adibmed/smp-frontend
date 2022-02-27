import createRepository from "~/api/Repository";

export default (context, inject) => {

    inject("api", createRepository(context.$axios));
};