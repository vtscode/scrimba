const apiURL ='https://jsonplaceholder.typicode.com/posts';

async function getTop100Campers(){
	const response = await fetch(apiURL);
	const json = await response.json();

	console.log(json[0]);
}

function resolveAfter3Sec(){
	return new Promise(resolve => {
		setTimeout(()=> {
			resolve('resolve');
		},3000);
	});
}

resolveAfter3Sec().then((data) =>{
	console.log(data);
});

async function getAsyncData(){
	const result = await resolveAfter3Sec();
	console.log(`result async : ${result}`);
}

getAsyncData();

// Promise
// function getTop100Campers () {
// 	fetch(apiURL)
// 	.then((r) => r.json())
// 	.then((json) => {
// 		console.log(json[0])
// 	}).catch((e) => {
// 		console.log('failed');
// 	});
// }

getTop100Campers();