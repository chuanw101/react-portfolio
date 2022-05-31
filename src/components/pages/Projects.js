import React from 'react';
import '../../styles/Projects.css';

export default function Projects() {
    return (
        <section>
            <h1>Projects Page</h1>
            <div class="relative-img">
                <img src="./images/wheres-the-beer.png" alt="wheres the beer screen shot" />
                <div class="text-overlay project-name">
                    <h2>Where's the beer?</h2>
                    <h3>HTML/CSS/JavaScript</h3>
                </div>
                <div class="center hidden">
                    <a class="text-overlay margin-right" href="https://github.com/framenolan/wheres-the-beer" target="_blank" rel="noreferrer">GitHub
                        Link</a>
                    <a class="text-overlay" href="https://framenolan.github.io/wheres-the-beer/" target="_blank" rel="noreferrer">Deployed
                        Link</a>
                </div>
            </div>
            <div class="box">
                <div class="relative-img">
                    <img src="./images/weather-dashboard.png" alt="weather dashboard screen shot" />
                    <div class="text-overlay project-name">
                        <h2>Weather Dashboard</h2>
                        <h3>HTML/CSS/JavaScript</h3>
                    </div>
                    <div class="center hidden">
                        <a class="text-overlay margin-right" href="https://github.com/chuanw101/weather-dashboard" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a class="text-overlay" href="https://chuanw101.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div class="relative-img">
                    <img src="./images/workday-scheduler.png" alt="work day scheduler screen shot" />
                    <div class="text-overlay project-name">
                        <h2>Work Day Scheduler</h2>
                        <h3>HTML/CSS/JavaScript</h3>
                    </div>
                    <div class="center hidden">
                        <a class="text-overlay margin-right" href="https://github.com/chuanw101/work-day-scheduler" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a class="text-overlay" href="https://chuanw101.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div class="relative-img">
                    <img src="./images/byob.png" alt="byo packpack screen shot" />
                    <div class="text-overlay project-name">
                        <h2>BYO BackPack</h2>
                        <h3>HandleBars/NodeJS</h3>
                    </div>
                    <div class="center hidden">
                        <a class="text-overlay margin-right" href="https://github.com/chuanw101/byo-backpack" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a class="text-overlay" href="https://byo-backpack.herokuapp.com/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div class="relative-img">
                    <img src="./images/work5.png" alt="place holder img5" />
                    <div class="text-overlay project-name">
                        <h2>Work 5</h2>
                        <h3>HTML/CSS</h3>
                    </div>
                </div>

                <div class="relative-img">
                    <img src="./images/work5.png" alt="place holder img5" />
                    <div class="text-overlay project-name">
                        <h2>Work 6</h2>
                        <h3>HTML/CSS</h3>
                    </div>
                </div>

                <div class="relative-img">
                    <img src="./images/work5.png" alt="place holder img5" />
                    <div class="text-overlay project-name">
                        <h2>Work 7</h2>
                        <h3>HTML/CSS</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
