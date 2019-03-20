const state = {
    homeInfo: {
        popText:{
            title: 'GET TO KNOW US A LITTLE BETTER',
            text: `Praesent ut ligula massa. Vivamus vel mi eget mauris tempor imperdiet. Quisque tempor, neque in venenatis consequat, magna sapien 
            viverra ante, quis sagittis nulla urna nec mauris. Etiam vehicula justo mollis pretium sollicitudin.Vivamus vel mi eget mauris tempor imperdiet. Quisque tempor, neque in venenatis consequat, magna sapien 
            viverra ante, quis sagittis nulla urna nec mauris.
       Nulla sodales malesuada neque, consequat eleifend odio commodo eget. Sed nulla arcu, dictum ac odio vel, rutrum dignissim quam. 
       Vivamus vel mi eget maur, magna sapien 
            viverra ante, quis sagittis nulla urna nec mauris. 
       Etiam ac facilisis eros, at eleifend mi.`
        }
    }

}
const getters = {
    homeInfo: state => {
        return state.homeInfo;
       },
}
const mutations = {

}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}