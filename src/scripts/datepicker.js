import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui/themes/base/datepicker.css'

$('[data-input="date"]').datepicker({minDate: 0, maxDate: "+6M"})