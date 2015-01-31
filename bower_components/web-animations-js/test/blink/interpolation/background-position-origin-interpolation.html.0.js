

// left-top
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'left 20px top 20px',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: 'calc(37.5% + 5px) calc(37.5% + 5px)'},
    {at: 0.50, is: 'calc(25% + 10px) calc(25% + 10px)'},
    {at: 0.75, is: 'calc(12.5% + 15px) calc(12.5% + 15px)'},
    {at: 1, is: 'left 20px top 20px'},
]);

// center-top
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'center top 20px',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: '50% calc(37.5% + 5px)'},
    {at: 0.50, is: '50% calc(25% + 10px)'},
    {at: 0.75, is: '50% calc(12.5% + 15px)'},
    {at: 1, is: 'center top 20px'},
]);

// right-top
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'right 20px top 20px',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: 'calc(37.5% + ((100% - 20px) * 0.25)) calc(37.5% + 5px)'},
    {at: 0.50, is: 'calc(25% + ((100% - 20px) * 0.5)) calc(25% + 10px)'},
    {at: 0.75, is: 'calc(12.5% + ((100% - 20px) * 0.75)) calc(12.5% + 15px)'},
    {at: 1, is: 'right 20px top 20px'},
]);

// left-center
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'left 20px center',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: 'calc(37.5% + 5px) 50%'},
    {at: 0.50, is: 'calc(25% + 10px) 50%'},
    {at: 0.75, is: 'calc(12.5% + 15px) 50%'},
    {at: 1, is: 'left 20px center'},
]);

// center-center
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'center center',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: '50% 50%'},
    {at: 0.50, is: '50% 50%'},
    {at: 0.75, is: '50% 50%'},
    {at: 1, is: 'center center'}
]);

// right-center
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'right 20px center',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: 'calc(37.5% + ((100% - 20px) * 0.25)) 50%'},
    {at: 0.50, is: 'calc(25% + ((100% - 20px) * 0.5)) 50%'},
    {at: 0.75, is: 'calc(12.5% + ((100% - 20px) * 0.75)) 50%'},
    {at: 1, is: 'right 20px center'},
]);

// left-bottom
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'left 20px bottom 20px',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: 'calc(37.5% + 5px) calc(37.5% + ((100% - 20px) * 0.25))'},
    {at: 0.50, is: 'calc(25% + 10px) calc(25% + ((100% - 20px) * 0.5))'},
    {at: 0.75, is: 'calc(12.5% + 15px) calc(12.5% + ((100% - 20px) * 0.75))'},
    {at: 1, is: 'left 20px bottom 20px'},
]);

// center-bottom
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'center bottom 20px',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: '50% calc(37.5% + ((100% - 20px) * 0.25))'},
    {at: 0.50, is: '50% calc(25% + ((100% - 20px) * 0.5))'},
    {at: 0.75, is: '50% calc(12.5% + ((100% - 20px) * 0.75))'},
    {at: 1, is: 'center bottom 20px'},
]);

// right-bottom
assertInterpolation({
    property: 'background-position',
    from: 'center center',
    to: 'right 20px bottom 20px',
}, [
    {at: 0, is: 'center center'},
    {at: 0.25, is: 'calc(37.5% + ((100% - 20px) * 0.25)) calc(37.5% + ((100% - 20px) * 0.25))'},
    {at: 0.50, is: 'calc(25% + ((100% - 20px) * 0.5)) calc(25% + ((100% - 20px) * 0.5))'},
    {at: 0.75, is: 'calc(12.5% + ((100% - 20px) * 0.75)) calc(12.5% + ((100% - 20px) * 0.75))'},
    {at: 1, is: 'right 20px bottom 20px'},
]);

