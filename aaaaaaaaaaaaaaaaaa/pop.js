



let getUserInput = () =>{
    let repoName = document.getElementById("repoName").value.trim();
    let visibility = "Public";
    let fileInput = document.getElementById("fileInput").files;

    if (repoName.length === 0) {
        alert('Repository name can\'t be empty!');
        return null;
    }

    return{repoName, visibility, fileInput};
}
