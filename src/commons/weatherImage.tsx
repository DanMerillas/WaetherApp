import raining from './../images/Shower.png'
import clear from './../images/Clear.png'
import snow from './../images/Snow.png'
import clouds from './../images/LightCloud.png'


export default function weatherImage(weatherString: string) {


    const weatherImage:any = {
        'Clear': clear,
        'Rain': raining,
        'Snow': snow,
        'Clouds': clouds
    }

    return weatherImage[weatherString];
}