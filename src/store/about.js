const state = {
    aboutInfo: {
        photoAbout:{ url:'https://i.imgur.com/wiImfAt.png' },
        hederText:{ title: 'ABOUT MY BUSINESS' },
        paragraph:`Mauris ut malesuada ligula, non congue metus. Cras sit amet consectetur sapien. Fusce interdum 
        nec erat sit amet posuere. Aenean fermentum nisl at nisl euismod, sit amet lobortis purusconsectetur. Class 
        rquent per conubia nostra, per inceptoshimenaeos. Suspendisse ornare gravida turpis, eget egestas orci ornare 
        sit amet. Quisque, turpis efficitur euismod venenatis, est tortor tempus ante, sit amet ornare diam diam accumsan 
        ligula. Cras nec fermentum orci.Porta sit amet. Vivamu feugiat eros non neque a dolor finibus posuere. Aenean nec
         mi sitametus massa sapien, interdumros non neque a dolor finibus posuere. Aenean nec mi sitametus massa sapien,
          intercursus purus sollicitudin non. Nam vel interdum nunc. Quisque imperdiet fermentum est, etiaculis justo. 
          Fusce ee laoreet, imperdiet nisi id,`,
        mission: {
            title: 'MISSION STATEMENT',
            text: `Curabitur pretium tempus viverra. Maecenas tincidunt mollis arcu et pellentesque. Cras vitae
            massa vitae nibh aliquam gravida. Integer elementum ultrices libero. Curabitur tincidunt
            pretium nulla in condimentum. Suspendisse ornare augue id tincidunt hendrerit. Curabitur
            accumsan mauris libero, bibendum tincidunt risus dictum ac. Vivamus at sollicitudin elit. Ut eu
            eros pretium, pulvinar turpis id, ultricies nibh. Integer egestas enim vel placerat facilisis.
            Phasellus eros purus, egestas eget tincidunt ac, ullamcorper id neque. Nam at nisi aliquam,
            molestie ipsum non, semper augue.is.`
        },        
        fun: {
            title: 'FUN FACTS',
            text: ` Mauris blandit mi fringilla nisi laoreet gravida. Sed porttitor pulvinar mi, vel finibus augue
            fermentum nec. Pellentesque augue sapien, maximus quis eros at, pharetra volutpat sem.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Aliquam erat volutpat. Donec accumsan posuere augue, eu molestie ex blandit ut. Sed blandit
            convallis elit in tempor. Quisque dignissim consectetur hendrerit. Curabitur leo dolor,
            tristique ut gravida rutrum, consectetur eu diam.`
        },
        services: {
            title: 'SERVICES'
        },
        photoPanel1: {
            url: 'https://i.imgur.com/Hw3r19k.png',
            title: 'WEBSITES'
        },
        photoPanel2: {
            url: 'https://i.imgur.com/ER6CPpp.png',
            title: 'PHOTO'
        },
        photoPanel3: {
            url: 'https://i.imgur.com/99EtUWF.png',
            title: 'SEO'
        },
        photoPanel4: {
            url: 'https://i.imgur.com/sKD1fif.png',
            title: 'APPLICATIONS'
        }
    }
}
const getters = {
    aboutInfo: state => {
     return state.aboutInfo;
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