$(document).ready(function(){
        
    //listen when user clicks on hamburger icon
        $('.hamburger').on('click',function(){
            $('#hb_menu').slideToggle();
        });
    
    //Accordion panel settings in my profile page
    
    //show only acct panel on page load
    $('.profile dd').css("height","0");
    $('#acct').css("height","auto");
    
    $('.profile dt').click(function(){      $('.profile dd').css("height","0"); $(this).next('dd').css("height","auto");             
    });
    
    //If a hash location is present show the corresponding tab in that page
    if(location.hash){
                var v= window.location.hash.substring(1);
                showTab(event,v);   
            }
    });
    
    function goTotab(event,tabID){
        var page;
        if (tabID=='cover' || tabID == 'references' || tabID == 'templates')
        {
            page = "resumes.html#";
        }
        else if(tabID=='selfEval' || tabID == 'network' || tabID == 'branding')
        {
            page = "career_guidance.html#";
        }
        else if(tabID=='career_centers' || tabID == 'libraries' || tabID == 'rights')
        {
            page = "local_resources.html#";
        }
        else if(tabID=='interview' || tabID == 'research' || tabID == 'tips')
        {
            page = "jobs.html#";
        }
        
        var url = window.location.href;
        if(~url.indexOf("index")){
            window.location.href="pages/"+page+tabID ;
        }
        else {
             window.location.href="../pages/"+page+tabID ;
        }
            
        }
   
    function showTab(evt, tabID) {

    //change the bg image for the desktop view
    if((self.innerWidth) >= 945){
        
        if(tabID == 'interview'){
        $('.sideMenu .btn1').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");
        }  
        
        else if (tabID == 'research'){
        $('.sideMenu .btn2').css('color',"#0074A7");
        $('.sideMenu .btn1').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");  
        }
        else if (tabID == 'tips'){
        $('.sideMenu .btn3').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn1').css('color',"#fff"); 
        }
        
        else if (tabID=='cover'){
        $('.resume').css('background-image','url(' + '../images/cover_bg.png' + ')');
        $('.sideMenu .btn1').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");
        }
        else if (tabID=='references'){
        $('.resume').css('background-image','url(' + '../images/shield_bg.png' + ')');
        $('.sideMenu .btn2').css('color',"#0074A7");
        $('.sideMenu .btn1').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");
        }
        else if (tabID=='templates'){
        $('.sideMenu .btn3').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn1').css('color',"#fff");
        }
        else if (tabID=='selfEval'){
        $('.career').css('background-image','url(' + '../images/selfeval_bg.png' + ')');
        $('.sideMenu .btn1').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");
        }
        else if (tabID=='network'){
        $('.sideMenu .btn2').css('color',"#0074A7");
        $('.sideMenu .btn1').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");
        }
        else if (tabID=='branding'){
        $('.sideMenu .btn3').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn1').css('color',"#fff");
        }
        else if (tabID=='career_centers'){
        $('.sideMenu .btn1').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");
        }
        else if (tabID=='libraries'){
        $('.sideMenu .btn2').css('color',"#0074A7");
        $('.sideMenu .btn1').css('color',"#fff");
        $('.sideMenu .btn3').css('color',"#fff");
        }
        else if (tabID=='rights'){
        $('.sideMenu .btn3').css('color',"#0074A7");
        $('.sideMenu .btn2').css('color',"#fff");
        $('.sideMenu .btn1').css('color',"#fff");
        }
    }
    

    $('.mainArticle').css('display',"none");
    $('.content').css('display',"none");
    
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
        
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab that was clicked
    document.getElementById(tabID).style.display = "block";
    
    //Style the tab only for the mobile view   
    if((self.innerWidth) < 945){
    evt.currentTarget.className += " active";
    }
    }
    
    function back(){
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        // Hide the subtabs and show the main article
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        $('.mainArticle').css('display',"block");
        $('.content').css('display','block');
        
    }
