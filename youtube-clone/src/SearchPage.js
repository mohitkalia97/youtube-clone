import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import "./SearchPage.css"
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

export default function SearchPage() {
  return (
    <>
        <Header />
        <div className="app-page">
            <Sidebar /> 
            <div className='searchPage'>
                <div className='searchPage-filter'>
                    <TuneOutlinedIcon />
                    <h2>FILTER</h2>
                </div>
                <hr />

                <ChannelRow 
                    image="https://avatars.githubusercontent.com/u/102523042?s=400&u=0db4cdb4509217c74738029540cef5d17e773e56&v=4"
                    channel="Mohit Kalia"
                    verified
                    subs="1M"
                    noOfVideos={10}
                    description="Welcome to my Channel!"
                />
                <hr />
                <VideoRow
                    views="1.5M"
                    subs="1M"
                    description="Coding a Youtube Clone"
                    timestamp="59 seconds ago"
                    channel="Mohit Kalia"
                    title="Lets go!"
                    image="data:image/png;base64,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"
                />
                <VideoRow
                    views="1.5M"
                    subs="1M"
                    description="Coding a Youtube Clone"
                    timestamp="59 seconds ago"
                    channel="Mohit Kalia"
                    title="Lets go!"
                    image="data:image/png;base64,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"
                />
                <VideoRow
                    views="1.5M"
                    subs="1M"
                    description="Coding a Youtube Clone"
                    timestamp="59 seconds ago"
                    channel="Mohit Kalia"
                    title="Lets go!"
                    image="data:image/png;base64,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"
                />
                <VideoRow
                    views="1.5M"
                    subs="1M"
                    description="Coding a Youtube Clone"
                    timestamp="59 seconds ago"
                    channel="Mohit Kalia"
                    title="Lets go!"
                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABIFBMVEUzSV3///8zSVwzSV81SF0ySl0wR1v///0tRFn//v/8//8ySls2Slw1S181SF7z9/dQYHBpdX9faXcVNk46U2JUXmsqRVknQFYfOlE9U2Xq7Oppe4QmQFQaNUgmP1A8TV5abHeSnKgfMEw1R2KcpKvR2N0kOlXk6ewWM0Tm6eshNk0QMEmqr7ZMX3LHzdEmP012hYoAGz2Djpg8TVgAKkTX3eEAGzcAJkm0vMSGj59seIcpOUpHWWGyvsDGy9aYoKwAAy9WWmxyhJShq64yTVHAzs3j4uQ7SFAAIDOjp7cVOUVydnobLkIAFTtkc4Sfp6pHT2sqNVnp+fXR4ueCmKEzRWfL1uG0tLUAAisAJTYRKFOPkZMAFywABSTS4uCoubzPt6CZAAAQ40lEQVR4nO2dC3ubRrrHmQHGY666RBpkISQkATbCWMUippKdtPY6e9p47W6cbs6e7mm//7c47wyS4iZOusk+tZPnzP9JbHEbhh/vvJeBKArGWFFUVVWkPkVrahLbpwkLaMLmpP59bbFJbp8ijPkIldA+URLYZ0li+yxJbJ8niU1KSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkrq/7U0QiilqqPquv7YfflKRKjX9nqtVutQbXs+AWy2/dh9+sKl6tSjxVniIi7DjS5abaZLbH8gsurkBkI7Ozu74iewS6ZHjMj3/j4mauYI7e7uIgFsp+aGdsMUW5b12J37UqWlSwMJbLsCF6p/gqKASmwfUvwtWpvXLrorWJk4msR2v+iypmS8iw3tGihJJbZ7pa7cnfWofIeasLfKkwncfWLTt77sHhlD8tg9/CLlJR/FhkL22D38EkWGxs5HseXeY3fxSxQZIont00XMj1kb5HOVxHafBsnHsUnfdq8+GkkB27GMpPdIvZO3va8ddLF67B5+mbLpSBTv96HbQeXKfOwOfpmyVX+OPjROE4vI4upe2bbqLd37qeVH2HEeu4NfpmzgNjErTultTcrn3pBbzIjlOPLbUT4oMjg9MzbRs/6QvGZMVvEfla0oZrDfz0pXlAzG3rPnjZR9LY9gPjpz/2dO69tcCvO+y4FabgUDz+/qYt2fKfze4md9XRI24UhN+/BG2PZvf4fE7/bTNOGh+JOBe48X2FTSzmBszv/umEJ/OjaVUsbeJtOwMNlyI4S8RQgLv/stDt6uM00M1ye43dnOP5L1RoJN825j9W78i4Y2B2CMCZyfkjstAyvNcTQHtpnW9tTkbicUnr91IqNqDrr/AYhPkEo82irCosVE8UY80iyKkb+p5Oxeb3ultNfr8a5q8Htz11VYaRNFg/2ePHnSGw6H/Bb3enQd+DEcMhzWG3tD+GXVd4F4Khxiex7h1OBjbTK6P+gti2LZSQk/taCnYWjAgVaGw2Peik0VllK111P50dvOHYbXnkcfqpTyTvM69BjfUtvyG/XSq+mRAJRGCP2wRkhfwk5tRXGGsMv36/55OUJnnkJb2+B/TkkDoWhcH9NHxmB6N5ea1nen4Yp04aDqMNNkGdrzODXLK5J1oqrSc4RmQG0yLpHRIr1tC88ZK1zRS7fqsbfc/Id7nmzt82sqz6qqRE1qrwogk19UB3BB/MZpaWmgZIW3hHZm3NggxmdB3cAAiSktwGYcgJIkaRKODRUCD20idz9092AToAC54RobQntlecAxByaU43ttoHb0l5Kfv/rt0k28NTY8gJxsFOhP4AS8geSgYMFzZJR5vgdHt+jbi7HtP92frbUCL5ofj+M43u+ZmPc0Tz3mXRW7O4lHFLxKjD3UEV1TA7TnIl9VSAfWJVfC/bECvVhjQ6vZeJwOBqZOOshFhjOBxIBjC9hgMLg6Ruh4Bh8CdYPteOYNehEyhk7Msam28lfI9ovUiz2vfUj4E6kZxqvXsG5lmk8A0aw9G89SioMQuf/le7PDBLn+3ct5IHPr9hG6uLI02wG/ixXqonyhccUAcOqpeOUab1DmwaWqLERvXDQkHEVUwm3m1w+D+AZFNbYh/w45CwtsBzk6a6+xiXFEgVOHKLpeh1qO7ZRgi4xd9EMssIE5R8g9hXAEPcHYqrEFI7DsVBXYml0dgqpmCWw/mqrKOggtH34+DYwJlTONR28LQjaMFQT+VoHOObNnyF0pGnNRCx2IyZcBDGMXHQK2Ocoz9IbfZjJE7kuUpEp3BNjgQPHVe9za4IL6bG1tCnAjh4Ctu319SmCjAGeVozz2b7i1wb5oSVVb7KPV2Czwo/mAx0zwbU3Ku6bo2AdsA9209Cv3MaYhCXS0D1Ub9JRjSxMYohOsmGASvNNLqmkG+pvL+8sv1N13uS+BgZlfwwKYjT9FZ02UjDWBDWyCm4PabSDjb5dGkmKB7Uh/i217Zm581NQxx+YFN+igrYLvTGb1q2mqusbG7+tYNaHVGhucQNEtjm3Mz5a66PzhsUEEc/d5/AfD0029Z6BfmAO3k/c7hcHBwJqMb3IeKjUgVP3LBZR8PjVfGGBMEDES1GwhNxXYVm1wXe0Bxhzb+BSOH7y1NsqxkfewqXAnpkxYmwKWnbG68gZs4sZ99wwl2kSsAmydfX4CD1usxkZmBTLwB/LrP1Fwf8uBvf4OVZ20+A116m7Y6QGqPPBI7qJAbqxqV0AI/hZU8TJULYBlrIJHc69GhktwFyLpHpd7u8IqMBmnFwg1KMfm8+ZrTttsQYQEn8XjN8joEBFJic3D7+YLXWtsENinae0Mwbe54gSvHIHthMU//bAJ2A+MrYQRom5qKd7PDlFrn22nfBu9RntjCpZFgVAyGCS8m16FshhYrlQfPgUAYKjB5vW0jbvSOLZ9MzhAyf7W2kyOzdlaBsc2nRc3LxAKV7jGdsidPv9m0i22Hch0jO+FtUECspnhoNy31a8XvWg+wnMpDKErSiEyKVtso+4GWzvh1vYtOhiPL3lWAoR8iAqQrcY5YIMx/JKteIiA0dMgIpJqtSzOZF/4pl+8jW/rvm9tdVq7TC29xgYNzbvq+pW0GpurJuhFusHWXME2TTO5te2WJSTGSecx3vwDFi6kH2tr47e7WF+Zbg64b6MhKuN4Dt6r7aIehXQjY3ocoTBOc1SlEA1mWOM5p8AGpqI6GhZMoFnYxeCj/K213alUYfHitywcDSgcILApOhigbyt1ua6Ju9hg4DNveMzGHNtE5YWoqfBB+o03WJXgAR4BG5weNSD01dh0QFN5ohaHkhv62yTsBgxNO4JIcI1eDFSwsyrWxy9gqEIW4s4qMD5nbKBrge0YynWouuGCIfuY8areQNWQJ6Qb3/Z7bKdHHqN8WkQFbAdtZXAAGaBqb2Y5OLZ/4jRDRoMo6hqbSHCcmIcEcMbB4zwGJZAVVeONF9YhQhisxqakYIgrG0Jt5fHMIMugg6p3hp7FeroHUd+BAdpIIOnAPAnYYDMxb8rp8EFqqZCpGCOe7sI6fA+2zRxBjU2Fk6GGCnnFW2wzkVomsWoTkYCo4utLHVZj4x1+lHcVYJSi5UCvfZvOr+VsIPw2a4kRwyowr8lkjsoSUU3xMxTFuL2LrieT9AxVsAQ14x76lnVrbLoOqYPA9qMJRgO+8NKosZnv+7YGVuwttr225hwb4Mi6PPnjN07UpA6UCQjKBFvkbZAucyn+GhskRe5jPAcllrtjTFce832PERtGBPpt5vl+OnIhcCq2n/NUanLkQq4Onhm6WcaY7EJm4cAo3UXFxFa8FzBUed521PbiGP6ofJDuAzabniLDgIi7jaS/w3ZqQnUiCNW+zQkg30hGA99n3oCIGZDxBMwNMpkR4dhaM6idoWBVN9h4ytS5Mx/4cNx6e3z+ZRpOz9xrwr04Sm6KkP/6q6WpEGqfg7F4zyDIUdvuhpCP6MNdiJ9YPwLiR6ptwz4XMcd2eZnn+WU+ZcK38ZHm/B3ug3u09W3vYsPC2iyr9m2q5YV8OiYLp1lZenyQjieaZUHak6Q8b4tyoYrxmnQG2PQBT5YfAZuNj7LNI5+CadpVuP4XERkP9qrHEzVV7zaRsYLKlf4Cd1mHK7YAWwCOha/0eJzg2NaKfIGNt+5MrvaQEXwoJJj2BhtUK23+pJiNonUrLlsPUgsfQXOVv83boEQOnvP9deHcoCB+BGy24gfNMMueLy3mQKXMBs1pNu2vUscBJM6yf8pnso9GhxhqV7XXh+Kq1+8fw8ggw+ueDuvU1rJFcG+5UYMqw+WyngZT6Wl/SYTrtJfLnrktrtRhc2njDTbc6DcJny5TaKoV0ywLW6lKoMku3DvTDEb9paac99e6puRw3qccGzldLh/j1Rg+o2oRxmIGZTavolWly0CQgEGFbzuUEoxN7EwchWNTKJ8g6fJ9VWcC6TtfScRMNOza7VIuCCmUrtMpHXYGx8/nWCjVzTsPLmHR3mCzSLdris5gXQX3xXzYqBBoRWAzCe2qDjRfCypZp9vFiggP9IGeHbyv+58mreug+kL/wH282wD+2MY/3rDeiOuu8ckm9Z1Nd46W/z5ISkpKSupL1Efi02eHLvxHAfmrF7YgI7vz4LZ+YWNd8JPfrYfMjgT3ofTfSWxUyLf4owIxZ3bvuzkY03caIvRrIq02etokHvFk1OKTrdgctRqt0RDyebPb5A+01i8WkRHXMOyJ/cREGZ8R45+D0LI0686/HnaePCFQQOpmo3UYxxOx7e6LtdgijWJ7q+r2Gq8p/LLth3ve/p+ILo2U9V/FDtEwn/wljQgK0KgBi2bwm5jK1PirRJjmufsiKowGFdPVqqOJiURObmAcE15RWsJIwVTj29cMjVU6dS+jV0UAUOAQxbL5C1z8PRts0eLWE6YI+4uXsmg/GVi4Lvi/hpf82lG4+HUZs15ANHsyMYfxCVp4UGyR4yDLmM1UzHoqUxRv8Y95e7F72mOYHJOJ45AnrOf7sJgaq58cintej1HL75nsZ4foaKayabVo94zOz+ynn1Y/D02Vm/CxzV+goUXZ9lQ7VrD/JOhagTVs3g5ocHoEVdzRUP3ysZFGMorGL5PoVesqOY9fl3GMgqOLS0bR06z8R5KnQRQl/GGbFxW07eal27tCPe+sWrzK3bOzF642NvLIbV4lVek2UvhYjKPQRzONTXOPeGfZ7LJMzp5GRTuv0jDPotIN46JcZEl5GwRJ5I6CqRuVt1ejJEqO+mVSdO0v3895udtbGY3xefL013lcRLGHgmB66cUc2wJQTt/898pNNcW7nQO25T8vs4UxBBonqHGFzp/mP5yg/qyfLJKbp1kepyedg8UdbOzm7Jdofz+ZF2ezslzkyyxatNzZvOy4+/tnFZs9Dauh4c+mydPk+++mb0ZoGHwN/5sXXSZXcAlqbHyTzFkReR4a+NNLMLqTLPPj6nl+cFu+cjTbK+d04DaCi+oEsFWAjbXd1iCDRdMM0DfJS4B+cnEbcWwMtdfWBg2EAYz3SdKqok5ylWVtGy3mZVh53Xl5lUdlfl7+GLxMPKMsk3yUDMyvgBpge7F/jPx2wz0p5/8zFdiCMD9ZAbZ8sIiK/JfFbED53G5BU7fhZWfg4f7Jra3bdkeD7OwEHXtwdPLSK6LD5F/He1tsz2bx0OhVVRvWnNxWzbDKZ1nlPdlZFGU/mbWnVZj/7zw/TK7aRTJzZ+32CkID/rwXih9W9PxgP8iS50nRnroXvwps5qGR5cYic7MqOeq4N9MwAGy3gM04BGyzZ7/+lqyxpdXZwoimSTFL5t7ryDZucvepwIbZNAkrt2BD3ozPMtezUTGo+PTtCfi22zxzvz93p7/mJ2U0LRNwdmHWaiYe/hr+31pyWHR1rxl2ApX1i+M5pWFXp52wV7Bm57xYmWRYhA3M+TYILXr0uklp0e9cxyHxxaJfDMNWQIsGbZyzTnhc+OctGlIMyVl4bq0UYhXFEVYb53DckDabXbOIGwUL5rAUL4vTOQ2KwiroqhUWQ+jN1/GfJJMuZ8J4EkUpLxgY5kk7pgqFwkDFCqlf51b4T4pVQvkL57DF57tiQnS+n6ZQB45SHOYwTAlPWeBAcSTmk7c6HIcV/ocqmKmkyxshigYnJvzEcCjfT9P4gV8BNSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSmpB9T/AXJRxmkI2/d8AAAAAElFTkSuQmCC"
                />
                <VideoRow
                    views="1.5M"
                    subs="1M"
                    description="Coding a Youtube Clone"
                    timestamp="59 seconds ago"
                    channel="Mohit Kalia"
                    title="Lets go!"
                    image="data:image/png;base64,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"
                />
            </div>
        </div> 
    </>
  )
}
