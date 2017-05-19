var canvashack = {
    sort: function() {
        "use strict";
        $('.rubrics_dialog_contexts_select').html(
            $('.rubrics_dialog_contexts_select').children('li').sort(
                function(a,b) {
                    var archived = /^\d{4,4}-\d{4,4}/;
                    var left = $(a).text().trim();
                    var right = $(b).text().trim();

                    if (archived.test(left) && !archived.test(right)) {
                        return 1;
                    }
                    if (archived.test(right) && !archived.test(left)) {
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
};
