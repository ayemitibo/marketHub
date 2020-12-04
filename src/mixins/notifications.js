export const notifications = {
  data() {
    return {
      // Izitoast
      notificationSystem: {
        options: {
          ballon: {
            balloon: true,
            position: 'bottomCenter',
          },
          info: {
            position: 'topRight',
          },
          success: {
            position: 'topRight',
            close: true,
            closeOnEscape: false,
            timeout: 3000,
            displayMode: 2,
          },
          warning: {
            position: 'topRight',
          },
          error: {
            position: 'topRight',
            displayMode: 2,
          },
          question: {
            timeout: 20000,
            close: false,
            overlay: true,
            toastOnce: true,
            id: 'question',
            zindex: 999,
            position: 'center',
            buttons: [
              [
                '<button><b>YES</b></button>',
                function(instance, toast) {
                  instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
                },
                true,
              ],
              [
                '<button>NO</button>',
                function(instance, toast) {
                  instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
                },
              ],
            ],
            onClosing: function(instance, toast, closedBy) {
              console.info('Closing | closedBy: ' + closedBy)
            },
            onClosed: function(instance, toast, closedBy) {
              console.info('Closed | closedBy: ' + closedBy)
            },
          },
        },
      },
    }
  },
  computed: {},
  methods: {
    showDefaultNotification(title, icon, toastColor, path, customTheme, position, timeout) {
      let that = this
      this.$toast.show(' ', title, {
        theme: customTheme || 'dark',
        icon: icon,
        timeout: timeout || 30000,
        iconColor: toastColor,
        close: false,
        overlay: false,
        transitionIn: 'bounceInRight',
        layout: 1,
        iconUrl: '/img/tooltip-lightning.svg',
        displayMode: 2,
        position: position || 'bottomRight', // bottomLeft, topRight, topLeft, topCenter, bottomCenter
        // progressBarColor: '#FF2E2E',
        progressBarColor: 'rgb(250, 189, 16)',
        buttons: [
          [
            '<button>Ok</button>',
            function(instance, toast) {
              instance.hide(
                {
                  transitionOut: 'fadeOutUp',
                },
                toast,
                'buttonName'
              )
              that.$router.push(path)
            },
            true,
          ], // true to focus
        ],
        onOpening: function(instance, toast) {},
        onClosing: function(instance, toast, closedBy) {
          console.info('closedBy: ' + closedBy) // tells if it was closed by 'drag' or 'button'
        },
      })
    },
    showDefaultNotificationWithModalAction(title, icon, toastColor, path, customTheme, position, timeout) {
      let that = this
      this.$toast.show(' ', title, {
        theme: customTheme || 'dark',
        icon: icon,
        timeout: timeout || 30000,
        iconColor: toastColor,
        close: false,
        overlay: false,
        transitionIn: 'bounceInRight',
        layout: 1,
        iconUrl: '/img/tooltip-lightning.svg',
        displayMode: 2,
        position: position || 'bottomRight', // bottomLeft, topRight, topLeft, topCenter, bottomCenter
        // progressBarColor: '#FF2E2E',
        progressBarColor: 'rgb(250, 189, 16)',
        buttons: [
          [
            '<button>Ok</button>',
            function(instance, toast) {
              instance.hide(
                {
                  transitionOut: 'fadeOutUp',
                },
                toast,
                'buttonName'
              )
              $(path).modal({
                show: true,
                keyboard: false,
                backdrop: 'static',
              })
            },
            true,
          ], // true to focus
        ],
        onOpening: function(instance, toast) {},
        onClosing: function(instance, toast, closedBy) {
          console.info('closedBy: ' + closedBy) // tells if it was closed by 'drag' or 'button'
        },
      })
    },
    showSuccessLoginNotification() {
      this.$toast.success('Successfully Logged In!', 'OK', this.notificationSystem.options.success)
    },
    showSuccessRegistrationNotification(statusText) {
      this.$toast.success('*', statusText, this.notificationSystem.options.success)
    },
    showErrorLoginNotification(errorMessage) {
      this.$toast.error(`${errorMessage}`, 'Error', this.notificationSystem.options.error)
    },
    showErrorRegistrationNotification(statusText) {
      this.$toast.error('*', statusText, this.notificationSystem.options.error)
    },
    showSuccessNotification(value) {
      this.$toast.success(value || 'Operation successful!', 'OK', this.notificationSystem.options.success)
    },
    showErrorNotification(value) {
      this.$toast.error(value || 'Operation failed', 'Error', this.notificationSystem.options.error)
    },
    showWarningNotification(statusText) {
      this.$toast.info(statusText, 'Warning', this.notificationSystem.options.info)
    },
  },
}
