define(['jquery', '../NotesManager'], function($, NotesManager){
    $(function () {
        var notes = [
            "This is the first note I've taken!",
            "Now is the time for all good men to come to the aid of their country.",
            "The quick brown fox jumped over the moon."
        ];

        var nm = new NotesManager(notes);
        nm.init();
    });
});


