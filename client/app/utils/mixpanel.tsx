import mixpanel, { Dict } from "mixpanel-browser";

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "");

let actions = {
  identify: (id: string, name: string, props: Dict) => {
    mixpanel.identify(id);
    mixpanel.track(name, props);
  },
  alias: (id: string) => {
    mixpanel.alias(id);
  },
  track: (name: string, props: Dict) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props: Dict) => {
      mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;
