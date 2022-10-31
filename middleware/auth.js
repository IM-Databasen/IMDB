export default function({ store, redirect, $notifier }) {
    if(!Object.keys(store.state.user).length) {
      redirect('/login');
      $notifier.showMessage({ content: 'Du er ikke logget inn', color: 'error' })
    }
  }