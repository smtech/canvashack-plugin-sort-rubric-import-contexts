var canvashack = {
    listItems: 0,
    sorted: false,

    sortContexts: function() {
        "use strict";
        var currentListItems = $('.rubrics_dialog_contexts_select').children('li').length;

        /*
         * Boy, it sure is convenient that there is an extra DOMSubtreeModified
         * event in here!
         */
        if (currentListItems == this.listItems) {
            window.setTimeout(function() {
                /*
                 * note that we have to asynchronously unbind, since we're
                 * currently waiting on the handler to finish executing!
                 */
                $('.rubrics_dialog_contexts_select').off('DOMSubtreeModified');
            }, 10);
            if (!this.sorted) {
                this.sorted = true;
                console.log('sorting');
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
        }
        this.listItems = currentListItems;
    },

    temporaryBind: function() {
        "use strict";
        $('.rubrics_dialog_contexts_select').on('DOMSubtreeModified', this.sortContexts.bind(this));
    }
};
