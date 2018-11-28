let app = new Vue({

    el: "#app",

    data: {

        clockstuff: '00:00:00',
        alarmTime: '00:00:00',
        alarmHours: 0,
        alarmMinutes: 0,
        alarmSeconds: 0,
        alarmStore: '00:00:00',
        alertMessage: '',
        timerTime: '00:00:00',
        timerStore: '00:00:00'


    },

    created: function () {

        let self = this;
        self.clockstuff = self.setTime();
        self.alertMessage = self.alarmAlert();
        setInterval(function() {
            self.clockstuff = self.setTime();
            self.alertMessage = self.alarmAlert();
        }, 1000);

    },


    methods: {

        setTime: function () {

            let now = new Date();

            let hours = now.getHours();
            this.alarmHours = hours;
            let suffix = hours >= 12 ? "PM":"AM";
            hours = ((hours + 11) % 12 + 1)

            if (hours < 10) {
                hours = '0' + hours;
            }

            let minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let seconds = now.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            this.alarmSeconds = seconds;
            this.alarmMinutes = minutes;
            return hours + ':' + minutes + ':' + seconds + " " + suffix;

        },

        setAlarm: function () {

            this.alarmStore = this.alarmTime;
            console.log(this.alarmStore);


        },

        alarmAlert: function () {

          let alarmMatch = this.alarmHours + ':' + this.alarmMinutes;

          if (this.alarmStore == alarmMatch){

              return "Wake up!";

        }

      },

      setTimer: function () {
        this.timerStore = this.timerTime;
        console.log(this.timerStore);

      },

      runTimer: function () {

        this.timerStore--;

      }

    }



});
