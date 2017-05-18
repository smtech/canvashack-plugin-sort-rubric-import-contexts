var canvashack = {
    sort: function() {
        $('.rubrics_dialog_contexts_select').html(
            $('.rubrics_dialog_contexts_select').children('li').sort(
                function(a,b) {
                    var
                        numbers = /^[0-9]/,
                        letters = /^[a-z]/i,
                        left = $(a).text().trim(),
                        right = $(b).text().trim();
                    console.log(left + ' / ' + right);
                    if (numbers.test(left) && letters.test(right)) {
                        return 1;
                    } else if (numbers.test(right) && letters.test(left)) {
                        return -1;
                    }
                    return left.localeCompare(
                        right,
                        'us',
                        {sensitivity: 'base'}
                    );
                }
            )
        );
    }
}
