/**
 * Created by leonkim on 2017. 6. 27..
 */
var td = new Treasure({
    database : 'terminal',
    writeKey : '9313/053aa6ce28c160b06a41fbac0f22f35e72890ca3'
});
td.trackPageview('client');


// td.trackEvent('click')
var open_detail = function(me){
    var id = me.parentElement.id;
    console.log(id);
    $('#modal-title').html(id);
    switch(id){
        case 'head-1' : $('#modal-content').html(detail1); break;
        case 'head-2' : $('#modal-content').html(detail2); break;
        case 'head-3' : $('#modal-content').html(detail3); break;
        case 'head-4' : $('#modal-content').html(detail4); break;
        case 'head-5' : $('#modal-content').html(detail5); break;
        case 'head-6' : $('#modal-content').html(detail6); break;
    }
    $('#detail_modal').modal();
};
var save = function(me){
    var selectedTitle = me.parentElement.parentElement.getElementsByClassName('modal-title')[0].innerHTML;
    var data = {target:selectedTitle};
    td.trackEvent('button',{name:'save',target:selectedTitle});

    $.ajax({
        type: "POST",
        url: 'http://localhost:8088/',
        data: data,
        success: function(res){
            $('#detail_modal').modal('hide');
            alert(res.status);
        }
    });
};
var tracklink = function(from,to) {
    td.trackEvent('button', {name:'move',from:from,to: to});
};

var detail1 = "When pulses are overlapped, any number of complications may arise, including the loss of one or more signals, as shown in Figures 3 and 4. If the signals are overlapped while the searcher is “marking,” then both signals will be cancelled. Once the signals no longer overlap, then signals that were originally masked are often shown again on the beacon display. These issues can make a multiple- beacon search unreliable and more complicated than a traditional search using signal strength analysis. The problem can be mitigated, but not eliminated, through analysis of the pulse frequency.";
var detail2 = "How likely is the phenomenon of signal overlap? In the field it can be very unpredictable. It is only a matter of chance (or bad luck) that the searcher will attempt to “mark” a victim when their signal is overlapping with another. In some scenarios it is quite rare and in others it can consistently scuttle a search. This is because the probability of signal overlap varies widely, depending on the configuration and number of transmitters.";
var detail3 = "To determine the scope of the problem, we developed both a computer simulation program and a mathematical model to predict the overlap characteristics for various combinations of transmitters. Using measured beacon properties (pulse period and pulse width) for a wide selection of beacons, the computer program accurately simulates the simultaneous operation of two to six beacons. Since the overlap characteristics change with time–and may be dependent on when the units are turned on–it is necessary to consider on the order of 1000N signal pulses when a group of N beacons is analyzed. The computer simulation steps through all of these pulses, keeping track of the durations of both overlapped and clear signal segments.";
var detail4 = "The mathematical model is the end product of a theoretical analysis that requires the evaluation of a few simple equations instead of the direct counting of a large number of pulses. The mathematical model is much more efficient for large number of beacons and the theory behind it provides insight into the factors that contribute to lengthy overlaps. The mathematical model was verified against the direct computer simulation, which was in turn validated against direct measurements of actual beacons monitored on an oscilloscope.";
var detail5 = "In the first set of trials, overlap statistics were compiled for the 24 assorted beacons discussed by Eck et al.3 We considered all possible groupings of 2, 3, and 4 beacons and recorded the duration of all overlapped and clear pulse segments for each. Figure 5 shows a histogram of the overlapped and clear signal durations for all possible combinations of 3 beacons. The histogram shows the probability (vertical axis) of encountering a specified overlap or clear duration (horizontal axis). The probability of overlap is depicted in red and the probability of clear pulses is shown in green. Most of the data is clustered near the center, which indicates a preference for frequent overlapped or clear pulse trains lasting only a few seconds. At reduced probability, there are also a non-negligible number of cases where much longer overlaps are observed.";
var detail6 = "Of particular note is the overlap duration of 120 seconds, which shows up as a spike at the right end of the figure. This data point is actually a compilation of all overlaps lasting 120 seconds or more, as plotting all of these data at their actual overlap durations leads to an ineffective figure with a very much elongated horizontal scale. These very long overlaps occur for cases where the transmitters have nearly the same pulse period. These very long overlaps are a real concern for timing-based signal isolation strategies since it is possible to obtain misleading or null indications on the receiver display during this time.";

