const state = {
    projects: [
        {
          category: "print",
          title: "Lorem Ipsum comes",
          description: "",
          url: "https://i.imgur.com/jAZHLmA.png",
          text:
            "Nunc tempus leo eget velit imperdiet, non cursus leo porta. Nam nec neque vel dui volutpat rhoncus. Vestibulum turpis erat, condimentum quis blandit id, dignissim vel odio. Suspendisse imperdiet pellentesque dignissim. Nullam ex ex, pulvinar a enim in, faucibus venenatis ligula. Vestibulum odio ligula, suscipit vitae aliquet at, sagittis ac sem. Pellentesque scelerisque aliquam posuere."
        },
        {
          category: "print",
          title: "The generated Lorem Ipsum",
          url: "https://i.imgur.com/AiqsQjc.png",
          text:
            "Etiam condimentum volutpat metus et placerat. Duis bibendum augue nec dapibus feugiat. Phasellus id mauris leo. Pellentesque pharetra leo vel lacus viverra, id cursus leo sagittis. Vestibulum tempor id nunc in hendrerit. Mauris eget lobortis justo. Nullam tempor cursus eros id mattis. Donec orci libero, mollis vel blandit vel, malesuada blandit urna. Nunc sodales molestie massa vel convallis."
        },
        {
          category: "print",
          title: "The point of using Lorem Ipsum",
          url: "https://i.imgur.com/cOw5Mle.png",
          text:
            "Morbi ac magna vel dolor vehicula tempor. Duis mattis volutpat lectus. Nullam convallis, dui quis rhoncus faucibus, turpis arcu elementum erat, a vulputate libero metus ut mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
          category: "web",
          title: "Latin words, consectetur",
          url: "https://i.imgur.com/vD0nQfo.png",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit elit tellus, at aliqam leo dignissim ut. Quisque tincidunt dolor sapien, non laoreet ipsum tincidunt at. Curabitur scelerisque, ligula nec volutpat tincidunt, purus nulla molestie quam, vel maximus erat quam eget massa. Phasellus sed placerat massa, vitae euismod orci. Nam posuere ligula non nunc mollis, eu luctus tortor sollicitudin. "
        },
        {
          category: "web",
          title: "Finibus Bonorum et Malorumv",
          url: "https://i.imgur.com/v2KyPnW.png",
          text:
            "uDuis ac mattis felis. Ut nec magna eu nisl volutpat congue sit amet ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent commodo vestibulum mi bibendum dictum."
        },
        {
          category: "web",
          title: "Lorem Ipsum as their",
          url: "https://i.imgur.com/0jfhjJW.png",
          text:
            "Suspendisse imperdiet pellentesque dignissim. Nullam ex ex, pulvinar a enim in, faucibus venenatis ligula. Vestibulum odio ligula, suscipit vitae aliquet at, sagittis ac sem. Pellentesque scelerisque aliquam posuere. Ut in posuere magna, sed lacinia ex. Duis auctor feugiat metus vel eleifend."
        },
        {
          category: "applications",
          title: " Aldus PageMaker including versions",
          url: "https://i.imgur.com/gRe9Axs.png",
          text:
            "Nullam tempor cursus eros id mattis. Donec orci libero, mollis vel blandit vel, malesuada blandit urna. Nunc sodales molestie massa vel convallis. Donec varius suscipit maximus. Pellentesque id scelerisque massa, nec pulvinar erat. Sed sed lectus ac tortor pretium eleifend sed eget ligula."
        },
        {
          category: "applications",
          title: "Class aptent taciti sociosqu",
          url: "https://i.imgur.com/AVFJ6Lk.png",
          text:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam non luctus ligula, dapibus dapibus erat. Pellentesque efficitur nulla nec iaculis feugiat. Maecenas et iaculis ligula."
        },
        {
          category: "applications",
          title: "Quisque id metus magna",
          url: "https://i.imgur.com/CyAK5BN.png",
          text:
            " Phasellus sed placerat massa, vitae euismod orci. Nam posuere ligula non nunc mollis, eu luctus tortor sollicitudin. Integer volutpat leo lorem, non vulputate ante tempus tempor. Sed bibendum neque ut porta faucibus."
        }
      ]
}
const getters = {
    getProjects: state => {
        return state.projects;
      }    
}
const mutations = {

}
const actions = {

}

export default {
    state,
    mutations,
    actions,
    getters
}