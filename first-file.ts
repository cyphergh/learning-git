const userArgs = process.argv.slice(2);
if(userArgs.length<1) {
       	console.error("password required");
	process.exit(0);
}
export async function checkPassword(password:string):Promise<boolean>{
	let hash:string = await Bun.password.hash("try");
	return await Bun.password.verify(password,hash);
}

try{
 const status:boolean = await checkPassword(userArgs[0]);
 if(!status) {
   console.log("You got the password",status);
   } else {
   console.log("Password error",status);
 }
}catch (err) {
 console.log(err)
}
