const profile = {
    firstName: 'Yuka',
    familyName: 'Iguchi',
    age: 20,
    major: 'literature',
    hobby: 'music',
    job: 'student',
    families: '2dogs',
};

const keys = Object.keys(profile);
for (let i  = 0; i < keys.length; i = i +1) {
    const key = keys[i];
    const value =profile[key];
    const text = '私の'　+ key +'は、' +value + 'です。'
    console.log(text);  
}
