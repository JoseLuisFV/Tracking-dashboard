
const getData = (path) => {
    return fetch(path)
        .then(response => {
            return response.json();
        })
} 

const createApp = async() => {
    const data = await getData("./data.json")
    data.forEach(item => {
        createTrack(item)
    });
    // item.title
    // item.timeframes.daily
    // item.timeframes.daily.current
    // item.timeframes.daily.previous
    // item.timeframes.weekly
    // item.timeframes.monthly
}

const createTrack = (item) => {
    const activity = document.createElement('article');
    activity.className = `${item.title.toLowerCase().split(' ').join('-')}`;
    activity.classList.add('activity')

    const wrapper = document.createElement('div');
    wrapper.className = `activity__wrapper`;
    addContent(item, wrapper);
    activity.appendChild(wrapper);

    const trackDashboard = document.getElementById('track');
    trackDashboard.appendChild(activity)
}

const addContent = (item, wrapper) => {
    const nodes = []
    const title = document.createElement('h2');
    title.textContent = item.title
    title.className = "activity__name"

    const current = document.createElement('span');
    current.textContent = `${item.timeframes.weekly.current}hrs`
    current.className = "activity__current";

    const menu = document.createElement('div');
    menu.className = `activity__icon`

    const previous = document.createElement('span');
    previous.textContent = `last week - ${item.timeframes.weekly.previous}hrs`
    previous.className = "activity__previous";
    
    nodes.push(title);
    nodes.push(current);
    nodes.push(menu);
    nodes.push(previous)
    wrapper.append(...nodes)
}

createApp();




