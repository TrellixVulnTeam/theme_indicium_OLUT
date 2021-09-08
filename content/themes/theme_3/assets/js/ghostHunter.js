$("#search-field").ghostHunter({
    results: "#results",
    onKeyUp: "true",
    includepages: true, 
    onComplete: function(results) {
        if ($('.search-field').prop('value')) {
            $('.my-search-area').show();
            $('.my-display-area').hide();
        } else {
            $('.my-search-area').hide();
            $('.my-display-area').show();
        }
        console.log("#results")
    }
  });