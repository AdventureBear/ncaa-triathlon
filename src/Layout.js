/**
 * Created by suzanne on 1/11/17.
 */
import React from 'react'
import { Link } from 'react-router'
import Program from './Program'


var Layout = React.createClass({

  getInitialState: function () {
    return {
      programs: [
        {
          "University": "Arizona State University",
          "Division": "I",
          "University Home Page": "http//www.asu.edu/",
          "Recruiting Link": "https//questionnaire.acsathletics.com/Questionnaire/Questionnaire.aspx?&SPSID=1061112&SPID=177408&DB_LANG=C&DB_OEM_ID=30300&q=2015&s=159130&o=143",
          "Team Homepage": "http//www.thesundevils.com/index.aspx?path=triathlon",
          "Head Coach": "Cliff English",
          "w": "480.965.0546",
          "e": "cliff.endlish@asu.edu",
          "bg-color": "#990033",
          "color": "#FFB310",
          "logo" : "logo-asu.jpg"
        },
        {
          "University": "Belmont Abby College",
          "Division": "II",
          "University Home Page": "http//belmontabbeycollege.edu/",
          "Recruiting Link": "https//coach.scoutforce.com/p/414f3219dd",
          "Team Homepage": "http//abbeyathletics.com/sports/wtri/index",
          "Head Coach": "Nick Radkewich",
          "w": "704.461.5010",
          "e": "NicholasRadewich@bac.edu",
          "Twitter": "https//twitter.com/AbbeyTri",
          "bg-color": "#FFFDD0",
          "color": "#DC143C",
          "logo" :"logo-ba.jpg"
        },
        {
          "University": "Black Hills State University",
          "Division": "II",
          "University Home Page": "http//www.bhsu.edu/",
          "Recruiting Link": "http//bhsuathletics.com/sports/wtri/WTriQuestionnaire",
          "Team Homepage": "http//bhsuathletics.com/sports/wtri/index",
          "Head Coach": "Amber Schwab",
          "w": "605.631.0141",
          "e": "Amber.Schwab@bhsu.edu",
          "bg-color": "#006233",
          "color": "#FFC726",
          "logo" : "logo-bhs.png"
        },
        {
          "University": "Centenary College of Louisiana",
          "Division": "III",
          "Description": "Centenary College of Louisiana is a private, four-year arts and sciences college located in Shreveport, Louisiana",
          "University Home Page": "https//www.centenary.edu/",
          "Team Homepage": "http//www.gocentenary.com/wtriathlon/",
          "Recruiting Link": "https//centenaryla.hobsonsradius.com/ssc/iform/BfEC7GcfEx6G0x703w6.ssc",
          "Head Coach": "Kyle Joplin",
          "w": "318.869.5770",
          "e": "kjoplin@centenary.edu",
          "bg-color": "#8A2432",
          "color": "#FFFFFF",
          "logo" : "logo-ccl.jpg"
        },
        {
          "University": "Concordia University Wisconsin",
          "Division": "III",
          "University Home Page": "https//www.cuw.edu/",
          "Recruiting Link": "http//cuwfalcons.com/sports/wtri/triathlonrecruits",
          "Coach Quote": "It's my goal to create an atmosphere that develops amazing individuals who happen to also be pretty great at Triathlon - Coach Shanks",
          "Team Homepage": "http//cuwfalcons.com/sports/wtri/index",
          "Head Coach": "Andrew Shanks",
          "w": "262.243.2144",
          "e": "andrew.shanks@cuw.edu",
          "Instagram": "https//www.instagram.com/cuwtriathlon/",
          "Twitter": "https//twitter.com/CUWTriathlon",
          "Youtube": "https//www.youtube.com/channel/UCmvFo7cXgU8-ziRFL5gwAZA",
          "bg-color": "#015697",
          "color": "#015697",
          "logo" : "logo-cu.png"
        },
        {
          "University": "Daemen College",
          "Division": "II",
          "Logo URL": "",
          "University Home Page": "http//www.daemen.edu/",
          "Team Home Page": "http//daemenwildcats.com/index.aspx?path=wtri&",
          "Recruiting Link": "https//questionnaires.armssoftware.com/db4ce9138b06",
          "Head Coach": "Jon Metz",
          "w": "716.523.2367",
          "e": "jmetz@daemen.edu",
          "bg-color": "#015697",
          "color": "#FFFFFF",
          "logo" : "logo-du.png"
        },
        {
          "University": "East Tennessee State University",
          "Division": "I",
          "University Home Page": "http//www.etsu.edu/etsuhome/",
          "Team Homepage": "http//www.etsubucs.com/wtriathlon/",
          "Recruiting Link": "",
          "Head Coach": "Janine Pleasant",
          "w": "N/A",
          "e": "pleasantjr@mail.etsu.edu",
          "bg-color": "#041E42",
          "color": "#FFC72C",
          "logo" : "logo-etsu.jpg"
        },
        {
          "University": "Marymount University",
          "Division": "III",
          "Univesity Home Page": "https//www.marymount.edu/",
          "Team Homepage": "http//www.marymountsaints.com/sports/wtri/index",
          "Recruiting Link": "http//www.marymountsaints.com/sports/wtri/Recruiting_Form",
          "Head Coach": "Doug Baumgarten",
          "w": "N/A",
          "e": "db@sportfit-lab.com",
          "Facebook": "https//www.facebook.com/marymount.university/posts/10154735085203330",
          "bg-color": "#003E7E",
          "color": "#FFFFFF",
          "logo" : "logo-mu.jpg"
        },
        {
          "University": "North Central College",
          "Division": "III",
          "University Home Page": "https//northcentralcollege.edu/home",
          "Team Homepage": "http//northcentralcardinals.com/?path=wtri",
          "Recruiting Link": "http//northcentralcardinals.com/sb_output.aspx?frform=24&path=wtri",
          "Head Coach": "Jenny Garrison",
          "w": "630.637.5688",
          "e": "jagarrison@noctrl.edu",
          "bg-color": "#C41E3A",
          "color": "#FFFFFF",
          "logo" : "logo-nc.png"
        },
        {
          "University": "Southern Wesleyan University",
          "Division": "II",
          "University Home Page": "http//www.swu.edu/",
          "Team Homepage": "http//swuathletics.com/sports/wtri/index",
          "Recruiting Link": "",
          "Head Coach": "Jamie Church",
          "w": "N/A",
          "e": "jchurch@swu.edu",
          "bg-color": "#015697",
          "color": "#CCCCCC",
          "logo" : "logo-swu.png"
        },
        {
          "University": "University of West Alabama",
          "Division": "II",
          "University Home Page": "http//www.uwa.edu/",
          "Recruiting Link": "https//questionnaires.armssoftware.com/0fd0d3393eed",
          "Team Homepage": "http//www.uwaathletics.com/index.aspx?path=triathlon&",
          "Head Coach": "Alie Nicosia",
          "Coach Quote": "The slogan for our school used to be 'There's something about this place', and if you get the chance to visit or become a part of our team, you will see it too.",
          "c": "803.645.1838",
          "e": "anicosia@uwa.edu",
          "Facebook": "https//www.facebook.com/UWATIGERTRIATHLON/",
          "Twitter": "https//twitter.com/UWATriathlon",
          "bg-color": "#C41E3A",
          "color": "#FFFFFF",
          "logo" : "logo-tig.png"
        },
        {
          "University": "Trine University",
          "Division": "III",
          "University Home Page": "http//www.trine.edu/",
          "Recruiting Link": "http//www.trinethunder.com/sports/wtri/recruiting",
          "Team Homepage": "http//www.trinethunder.com/sports/wtri/index",
          "Head Coach": "Danny Powell",
          "w": "260.665.4219",
          "e": "powelld@trine.edu",
          "bg-color": "#000080",
          "color": "#FFFFFF",
          "logo" : "logo-tu.jpg"
        }
      ]
    }
  },

  render: function(){

    return (
      <div className = "app-container">
        <header>
          <Link to="/" >
              <img className="logo" width="960px" src="./images/NCAA_logoGraphic.jpg" />
            </Link>
        </header>


        <div className="appContent">
          {this.state.programs.map(function(program,i){

            return <Program key = {i} name = {program.University} logo={program.logo} />
          })}
          {console.log(this.state.programs)}

        </div>

        <footer>
          <p>
            This is a demo app using React to showcase the NCAA Triathlon Programs as of 1/2017. THis site is not affiliated with USAT or the NCAA in any official capacity. This site is not maintained nor updated. Please do not rely on this site for up to date information on NCAA Triathlon.
          </p>
          <p>
            For uptodate information on NCAA Triathlon Recruiting Contacts, please see <a href="http://www.triathlonrecruit.com">Triathlon Recruit</a>, maintained by Andrew Shanks.
          </p>

          </footer>
        </div>
    )
  }
})


export default Layout