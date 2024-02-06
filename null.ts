function checkNull(id: string | null) {
    if (!id) {
        console.log(id, "Here id should be a falsy value");
        return;
    }
    return id.toLowerCase();
}

checkNull(null);

// The list of falsy or falsey vales in Js are: ! not returns a falsey value or executes any values values
// 1. null, 2. undefined, 3. False 4. 0(+Zero) 5. -0(-ve) 6. ""/ `` (Empty Strings) 
// 7. 0n(BigInt Zero) {#BigInt Zero doesnot have an negative number like -0n}
// 8. document.all  9. NaN (Like: Undefined +/- 9(Any Number) || 0/0)

export {};
