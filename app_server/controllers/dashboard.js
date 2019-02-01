//Get Dashboard page
const dashboard = (req, res) => {
    res.render('dashboard', { 
        title: 'Ninjas',
        pageHeader: {
            title: 'Ninjas',
            strapline: 'Find your internal ninjas'
        } 
    });
};

module.exports = {
    dashboard
};