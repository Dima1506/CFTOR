document.addEventListener('scatterLoaded', scatterExtension => {

    // Scatter will now be available from the window scope.
    // At this stage your app's connection to the Scatter web extension is encrypted
    // and ready for use.
    const scatter = window.scatter;

})