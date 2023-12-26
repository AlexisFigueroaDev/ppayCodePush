import {
  MAXIMUM_SUBE_RECHARGE_AMOUNT,
  MINIMUM_INMEDIATE_TRANSFER_AMOUNT,
  MINIMUM_TRANSFER_AMOUNT,
  MINIMUN_CASH_AMOUNT,
  MINIMUN_QR_CASH_AMOUNT,
  MINIMUN_RECHARGE_AMOUNT,
  MINIMUN_SUBE_RECHARGE_AMOUNT,
} from './limits';

export const ERRORS = {
  userAlreadyExists: 'Ya tiene una cuenta creada con este email.',
  default: 'Ocurrió un error inesperado.',
  signUp: {
    message412: '¡Cuenta bloqueada! Contactar al soporte.',
    message403: 'Hubo un problema al crear el usuario.',
    message400: 'El usuario ya se encuentra creado. Intenta con otra cuenta.',
    message500: 'Ocurrió un error al procesar el registro. Intenta nuevamente.',
    messageDefault:
      'Ocurrió un error al procesar el registro. Intenta nuevamente.',
  },
  signIn: {
    messageUserNotRegistered: 'No tienes un usuario registrado aún.',
    message401:
      'El correo que ingresaste no pertenece a una cuenta registrada.',
    message412: '¡Cuenta bloqueada! Contactar al soporte.',
    message500: 'Ocurrió un error al procesar el ingreso. Intenta nuevamente.',
    messageDefault:
      'Ocurrió un error al procesar el ingreso. Intenta nuevamente.',
  },
  magicLink: {
    message422: 'El código ha expirado o ya fue utilizado.',
  },
  transferMoney: {
    default: `Transferencia mínima $${MINIMUM_TRANSFER_AMOUNT}`,
    minError: `El importe tiene que ser igual o mayor a $${MINIMUN_CASH_AMOUNT}`,
    amountError: 'Saldo insuficiente',
    clientNotFound: 'Client not found',
  },
  inmediateTransfer: {
    default: `Transferencia mínima $`,
    minError: `El importe tiene que ser igual o mayor a $`,
  },
  qrPayment: {
    default: `Pago mínimo con QR $${MINIMUN_QR_CASH_AMOUNT}`,
    minError: `No se pueden hacer pagos menores a $${MINIMUN_QR_CASH_AMOUNT}`,
    amountError: 'Sin saldo suficiente',
    clientNotFound: 'Client not found',
  },
  recharge: {
    minError: `El monto mínimo a recargar es $${MINIMUN_RECHARGE_AMOUNT}.`,
    amountError: 'El monto no puede ser superior al saldo disponible.',
  },
  transportRecharge: {
    sube: {
      minError: `El monto mínimo a recargar es $${MINIMUN_SUBE_RECHARGE_AMOUNT}.`,
      amountError: 'El monto no puede ser superior al saldo disponible.',
      maxError: `El monto no puede ser superior a $${MAXIMUM_SUBE_RECHARGE_AMOUNT}.`,
    },
  },
  transportRechargeCardErrors: {
    sube: {
      maxNumberError: `La tarjeta tiene 16 digitos`,
      minNumberError: 'La tarjeta tiene 16 digitos',
    },
    other: {
      maxNumberError: `La tarjeta tiene 8 digitos como máximo`,
      minNumberError: 'La tarjeta tiene 7 digitos como minimo',
    },
  },
  myAccout: {
    error:
      'No podemos mostrarte esta\n información ahora. Intenta en\n otro momento.',
  },
  connectionError:
    'No podemos mostrarte esta\ninformación ahora. Intenta en\notro momento.',
  whitelist: 'Pronto vas a poder ser parte',
  paymentLink: {
    amountDailyError: 'Este monto supera tu límite diario disponible.',
    amountMonthlyError: 'Este monto supera tu límite mensual disponible.',
  },
};

export const SHOW_AMOUNT_FLOWS = {
  home: 'showAmountHome',
  myBusiness: 'showAmountB2B',
  earnings: 'showAmountEarnings',
  wallet: 'showAmountWallet',
  finances: 'showAmountFinances',
};

export const HTTP_CODES = {
  CODE_422: 422,
  CODE_500: 500,
  CODE_400: 400,
};

export const TEXTS = {
  APP_NAME: 'Personal Pay',
  // WELCOME
  SIGN_UP_BUTTON: 'Registrarse',
  SIGN_IN_BUTTON: 'Iniciar sesión',
  // SIGNUP
  SIGN_UP_TITLE: 'Para empezar, creá tu cuenta',
  SIGN_UP_DISCLAIMER: `Al registrarme, acepto los Términos y condiciones de uso y política de privacidad.`,
  CREATE_ACCOUNT_WITH_GOOGLE: 'Crear cuenta con Google',
  CREATE_ACCOUNT_WITH_EMAIL: 'Crear cuenta con email',
  TERMS_AND_CONDITIONS: `los Términos y condiciones\nde uso y política de privacidad.`,
  ACCEPT_TERMS_AND_CONDITIONS: `Al registrarme, acepto `,
  ACCEPT_TYC_AND_POLICIES: `Al registrarme, acepto los `,
  TERMS_AND_CONDITIONS_SINGUP: 'términos y condiciones ',
  PRIVACY_POLICY_SINGUP: 'política de privacidad',
  AND: ' y ',
  // SIGNUP ERROR
  SIGN_UP_ERROR_TITLE: 'Ya existe una cuenta\n con este correo',
  SIGN_UP_ERROR_DESCRIPTION:
    'El correo  g******s@gmail.com\n pertenece a una cuenta registrada.',
  SIGN_UP_ERROR_FIRST_INFOITEM:
    'Por seguridad no puede haber dos\n cuentas con el mismo correo.',
  SIGN_UP_ERROR_SECOND_INFOITEM: 'Si ya tenés cuenta, podés iniciar sesión.',
  SIGN_UP_ERROR_FIRST_BTN: 'Iniciar sesión',
  SIGN_UP_ERROR_SECOND_BTN: 'Volver a intentar',

  // HOME SCREENN
  HOME_ERROR:
    'No podemos mostrarte esta información ahora. Intenta en otro momento.',
  HOME_CARROUSEL_BANNERS_TITLE: 'Te recomendamos',
  HOME_PROMOTION_CARROUSEL_MODAL_TITLE:
    'Validá tu identidad para poder acceder a este descuento.',
  // ACCOUNT BALANCE HOME COMPONENT
  ACCOUNT_BALANCE_HOME_TITLE: 'Mi saldo',
  HOME_ACCOUNT_BALANCE_TITLE: 'Saldo Personal Pay',
  ACCOUNT_BALANCE_HOME_CURRENCY: '$',

  ACCOUNT_WALLET_TITLE: 'Billetera',
  ACCOUNT_WALLET_CVU_TITLE: 'CVU / Alias',
  ACCOUNT_MY_ACCOUNT_TITLE: 'Mi cuenta',
  ACCOUNT_MY_ACCOUNT_CVU_TITLE: 'Ver CVU y Alias',
  ACCOUNT_CVU_ERROR:
    'En unos minutos volverás a ver tus datos de la cuenta. Estamos trabajando para mejorar tu experiencia.',

  // CARROUSEL ACCOUNT BALANCE
  ACCOUNT_WALLET_BALANCE_PRINCIPAL_TITLE: 'Saldo Principal',
  ACCOUNT_WALLET_BALANCE_CORPORATE_TITLE: 'Cuenta de Beneficios',

  ACCOUNT_WALLET_BALANCE_PRINCIPAL: 'Principal',
  ACCOUNT_WALLET_BALANCE_CORPORATE: 'Corporativo',
  ACCOUNT_WALLET_BALANCE_AVAILABLE: 'Disponible',
  ACCOUNT_DEBITED_CORPORATE_BALANCE:
    'Tus próximas compras se debitarán del saldo corporativo.',
  ACCOUNT_DEBITED_MAIN_BALANCE_SECOND_TEXT:
    'Tus próximas compras se debitarán del saldo principal.',

  ACCOUNT_BALANCE: 'Saldos',
  BUY_CORPORATE_BALANCE: 'Comprar con Cuenta de Beneficios',
  RETURN_TO_MAIN_BALANCE: 'Pagar con cuenta principal',
  SELECTED_BALANCE: 'Saldo seleccionado',
  CONFIRM: 'Confirmar',
  BALANCE_CONFIRM: 'Confirmar saldo',
  ACCOUNT_TYPES_PLEASE_TRY_AGAIN_LATER:
    'No pudimos cambiar tu cuenta de pago. Por favor intenta nuevamente en unos minutos.',
  'No pudimos cambiar el modo de pago\nde tu tarjeta. Por favor intentá más tarde.':
    'No pudimos cambiar el modo de pago\nde tu tarjeta. Por favor intentá más tarde.',
  ACCOUNT_TYPES_SOMETHING_WENT_WRONG: 'Algo salió mal',
  CARD_CHANGED_BALANCE: '¡Listo! Cambiaste tu tarjeta\na saldo principal',

  // ACCOUNT BALANCE ACTIONS COMPONENT
  ACCOUNT_BALANCE_ADD_BUTTON: 'Agregar',
  ACCOUNT_BALANCE_SEND_BUTTON: 'Enviar',
  // GRERTING COMPONENT
  GRERTING_DEFAULT_NAME: 'Usuario',
  // NEXT STEPS COMPONENT
  NEXT_STEPS_TITLE: 'Próximos pasos',
  // NEXT STEP CARD COMPONENT
  NEXT_STEP_CARD_ALERT_TITLE: 'Estamos trabajando en tu cuenta',
  NEXT_STEP_CARD_ALERT_DESCRIPTION:
    '¡Falta poco! Te vamos a avisar cuando esté confirmada.',
  // PHONE BALANCE COMPONENT
  PHONE_BALANCE_BUTTON: 'Recargá con 30% extra',
  PHONE_BALANCE_TEXT1: 'Crédito disponible',
  PHONE_BALANCE_TEXT2: 'Datos disponibles',
  // SERVICE CARDS COMPONENT
  SERVICE_CARDS_TITLE1: 'Recarga de celular',
  SERVICE_CARDS_TITLE2: 'Recarga de transporte',
  SERVICE_CARDS_TITLE3: 'Pago de servicios',
  //SIGN IN SUCCESS SCREEN
  SIGN_IN_SUCCESS_TITLE: 'Verificaste tu mail',
  SIGN_IN_SUCCESS_TEXT:
    '¡Genial! Ya tenés tu cuenta\nen Personal Pay.\nPara hacer transferencias o realizar pagos, sólo falta validar tu identidad.',
  SIGN_IN_SUCCESS_CONTINUE_BUTTON: 'Validar mi identidad',
  SIGN_IN_SUCCESS_OTHER_MOMENT_BUTTON: 'En otro momento',
  // MODAL DISABLED ACCOUNT COMPONENT
  MODAL_DISABLED_ACCOUNT_TEXT:
    'Para poder usar tu billetera, primero\n necesitás validar tu identidad',
  MODAL_DISABLED_ACCOUNT_BUTTON: 'Comenzar validación',
  // PERSONAL DATA SCREEN

  NEW_PERSONAL_DATA_TITLE: 'Datos personales',
  PERSONAL_DATA_TITLE: 'Sólo faltan tus datos personales',
  PERSONAL_DATA_TEXT: `¡Ya falta poco! Nos queda confirmar\nunos últimos datos para terminar`,
  NEW_PERSONAL_DATA_TEXT: `Nos queda confirmar unos últimos datos para\nterminar`,
  PERSONAL_DATA_CONTINUE_BUTTON: 'Continuar',
  PERSONAL_DATA_OTHER_MOMENT_BUTTON: 'En otro momento',
  //STEPPER
  SCAN_DOCUMENTATION_STEPPER: 'Validar identidad',
  PHONE_VALIDATION_STEPPER: 'Validar teléfono',
  PERSONAL_DATA_STEPPER: 'Datos personales',
  // SCAN DOCUMENTATION SCREEN
  SCAN_DOCUMENTATION_TITLE: 'Validemos tu identidad',
  SCAN_DOCUMENTATION_TEXT1: 'Para continuar, necesitamos que\n seas',
  SCAN_DOCUMENTATION_TEXT2: 'Vamos a sacarle una foto a tu DNI y una selfie.',
  SCAN_DOCUMENTATION_BUTTON: 'Continuar',
  SCAN_DOCUMENTATION_ERROR_TITLE: 'No podemos continuar con la validación',
  SCAN_DOCUMENTATION_ERROR_SUBTITLE: 'Ocurrió un error inesperado.',
  SCAN_DOCUMENTATION_ERROR_BUTTON: 'Volver a intentar',
  SCAN_DOCUMENTATION_SNACKBAR: 'Vamos a sacarle una foto a tu DNI y una selfie',
  SCAN_DOCUMENTATION_BODY_TEXT:
    'Para continuar, necesitamos que seas mayor de 18 años y tener DNI argentino.',
  // DDJJ
  NEW_DDJJ_HEADER_TITLE: '¿Te impactan algunas de estas regulaciones?',
  DDJJ_HEADER_TITLE: '¿Te impactan algunas\nde estas regulaciones?',
  NEW_DDJJ_TITLE:
    'Por lo general, pocas personas se ven  afectadas por\nestas normas. Se completa como declaración jurada.',
  DDJJ_TITLE:
    'Por lo general, pocas personas se ven\nafectadas por estas normas. Se\ncompleta como declaración jurada.',
  DDJJ_BACKDROP_BUTTON_LABEL: '¿Por qué preguntamos esto?',
  DDJJ_DETAILS_PEP_TITLE: '¿Soy una persona expuesta políticamente?',
  DDJJ_DETAILS_PEP_DESCRIPTION:
    'Son los individuos que desempeñan o han desempeñado funciones públicas conforme a los dispuesto en la resolución UIF Nº 134/2018.',
  DDJJ_DETAILS_SO_TITLE: '¿Sujeto obligado ante la UIF?',
  DDJJ_DETAILS_SO_DESCRIPTION:
    'La unidad de información financiera es el organismo con autonomía y autarquía financiera a cargo del análisis, el tratamiento y la transmisión de información a los efectos de prevenir e impedir el lavado de activos (LA) y la financiación del terrorismo (FT). En caso que seas un sujeto obligado deberás adjuntar la constancia de inscripción UIF.',
  DDJJ_DETAILS_FOOTER_LABEL:
    'Podés ver más información en la sección de ayuda.',
  // ADD PHONE
  ADD_PHONE_TITLE: '¿Cuál es tu número?',
  NEW_ADD_PHONE_TEXT: 'Recibirás un código por SMS para validarlo.',
  ADD_PHONE_TEXT:
    'Te vamos a enviar un código para que puedas verificar tu número de teléfono',
  ADD_PHONE_TEXT_HINT: 'No lleva el 0 delante ni el 15. Ej: 11-55556666',
  NEW_ADD_PHONE_TEXT_HINT: 'Sin 0 ni 15. Ej. 11 5555 6666',
  ADD_PHONE_TEXT_FIFTEEN: 'Ingresá el código de área sin el 15',
  ADD_PHONE_TEXT_ERROR_AREA_CODE: 'El código de área no es válido',
  ADD_PHONE_TEXT_BUTTON: 'Continuar',
  ADD_PHONE_PLACEHOLDER: '11-55556666',

  //MARITAL STATUS

  MARITAL_STATUS_TITLE: '¿Cuál es tu estado civil?',

  // CHECK PHONE
  CHECK_PHONE_TITLE: '¿Cuál es el código que recibiste?',
  CHECK_PHONE_DESCRIPTION: 'Te enviamos un código de 6 dígitos al',
  NEW_CHECK_PHONE_DESCRIPTION: 'Te enviamos un código de 6 dígitos al\n',
  CHECK_PHONE_SEND_ANOTHER_PHONE: 'Enviar a otro número de teléfono',
  NEW_CHECK_PHONE_SEND_ANOTHER_PHONE: 'Vamos a reenviarlo al',
  PHONE_CODE_NOT_RECEIVED: 'No recibí ningún código',
  PHONE_CODE_NOT_RECEIVED_QUESTION: '¿No recibiste el código?',
  RESEND_CODE_COUNTDOWN: 'Reenviar código en',
  CHECK_PHONE_WRONG_CODE: 'El código ingresado es incorrecto.',
  CHECK_CODE_SEND_TO_ANOTHER_PHONE: 'Enviar a otro teléfono',
  CONFIRM_NEW_CHECK_CODE: 'Reenviar',

  // CUIL VERIFICATION
  CUIL_VERIFICATION_TITLE: '¿Cuál es tu número de CUIL?',
  CUIL_VERIFICATION_TEXT:
    'Nos permite validar tu datos para que puedas operar con tu cuenta',
  CUIL_VERIFICATION_KNOW_YOUR_CUIL: 'Conocer mi CUIL',
  // CHECK DOCUMEMNT RESULT SCREEN
  CHECK_DOCUMENT_RESULT_TITLE: 'No pudimos procesar tu consulta',
  CHECK_DOCUMEMNT_RESULT_CONTACT_US: 'Contactate con nosotros',
  CHECK_DOCUMENT_RESULT_RETRY: 'Iniciar sesión con otro correo',
  CHECK_DOCUMEMNT_RESULT_WHATSAPP: 'Ayuda por Whatsapp',
  // KYC RESULT SCREEN
  KYC_RESULT_TITLE: 'No pudimos procesar tu validación',
  KYC_RESULT_SUBTITLE:
    'Te damos algunos tips para poder\nrealizar un registro exitoso.',
  KYC_RESULT_BTN_TEXT1: 'Volver a intentar',
  KYC_RESULT_BTN_TEXT2: 'En otro momento',
  //KYC BLACKLIST
  KYC_BLACKLIST_ERROR_TITLE: 'Bloqueamos preventivamente\ntu cuenta',
  KYC_BLACKLIST_ERROR_TIP:
    'Para más información, contactate\ncon nuestros canales de atención.',
  // PENDING APPROVAL ONBOARDING
  PENDING_ONBOARDING_TITLE: 'Estamos trabajando en\ntu cuenta',
  PENDING_ONBOARDING_SUBTITLE:
    'Esta operación puede llevarte unos\nminutos. Cuando esté aprobada te\nvamos a enviar una notificación.',
  PENDING_ONBOARDING_GO_HOME: 'Ir al inicio',
  PENDING_ONBOARDING_SWORN_DECLARATION_BUTTON_CONFIRM: 'Confirmar',
  // CONTACT_US COMPONENT
  CONTACT_US_TITLE: 'Atención al Cliente',
  CONTACT_US_SUBTITLE: 'Estamos siempre para darte una mano.',
  // SECURITY COMPONENT
  SECURITY_TITLE: 'Seguridad',
  SECURITY_SUBTITLE:
    'Desde acá podrás modificar la\nconfiguración de tu seguridad',
  SECURITY_ACTIVATED_MESSAGE:
    '¡Listo! Activaste la biometría para ingresar a Personal Pay.',
  SECURITY_DISABLED_MESSAGE:
    '¡Listo! Desactivaste la biometría para ingresar a Personal Pay.',
  SECURITY_ACTIVATE_BIOMETRICS: 'Activar biometría',
  SECURITY_YOUR_PIN: 'Tu clave Personal Pay',
  SECURITY_FORGOT_PIN: 'Validar datos',
  SECURITY_ERROR_TITLE: 'No podemos activar\ntu seguridad',
  SECURITY_ERROR_MESSAGE: 'Actívala desde la\nconfiguración de tu celular.',
  SECURITY_ERROR_ANOTHER_TIME: 'En otro momento',
  SECURITY_ERROR_GO_HOME: 'Ir al inicio',
  SECURITY_GO_TO_SETTINGS: 'Ir a la configuracion',
  SECURITY_ANOTHER_TIME: 'Podes habilitar la seguridad desde tu perfil',
  BIOMETREY_FALLBACK_TITLE: 'Tu huella no coincide',
  BIOMETREY_FALLBACK_SUBTITLE:
    'Ingresaste tu huella de manera\nincorrecta varias veces',
  BIOMETRY_TRY_AGAIN_BUTTON: 'Volver a intentar',
  BIOMETRY_ANOTHER_METHOD: 'Probar con otro método seguridad',
  PINCODE_VALIDATION_ERROR_TITLE: 'Error de conexión',
  PINCODE_VALIDATION_ERROR_MESSAGE:
    'No pudimos procesar la solicitud.\nPor favor, volvé a intentarlo.',
  PINCODE_OPTION_TITLE: 'Clave Personal Pay',
  PINCODE_OPTION_DESCRIPTION:
    'Desde aquí podes crear o modificar tu\n clave para acceder a Personal Pay',
  ENTER_YOUR_PIN: 'Ingresá tu clave',
  ENTER_YOUR_ACTUAL_PIN: 'Ingresá tu clave actual',
  ENTER_YOUR_NEW_PIN: 'Ingresá tu nueva clave',
  CONFIRM_PIN_CODE: 'Confirmar tu clave',
  CREATE_PIN_DESCRIPTION:
    'Te va a permitir ingresar a Personal Pay,\nno la olvides',
  PIN_ADVISE:
    'Evitá utilizar datos personales, números\nque sean iguales o consecutivos.',
  WRONG_PIN: 'Tu clave es incorrecta',
  ASK_FORGOT_PIN: '¿Olvidaste tu clave?',
  PINS_ARE_NOT_EQUAL: 'Tus claves no coinciden',
  CREATE_PIN_SCREEN_TITLE: 'Creá tu clave',
  CREATE_PIN_TITLE: 'Generá una nueva\nclave de ingreso',
  CREATE_PIN_INFO_ONE:
    'Te vamos a pedir que generes una\nclave de seis dígitos',
  CREATE_PIN_INFO_TWO:
    'Te va a permitir ingresar a Personal Pay,\nno la olvides',
  CHANGE_PIN_SCREEN_TITLE: 'Cambiá tu clave',
  CHANGE_PIN_TITLE: 'Generá una nueva\nclave de ingreso',
  CHANGE_PIN_INFO_ONE:
    'Te vamos a pedir que generes una\nclave de seis dígitos',
  CHANGE_PIN_INFO_TWO:
    'Te va a permitir ingresar a Personal Pay,\nno la olvides',
  FORGOT_PIN_SCREEN_TITLE: 'Olvidé mi clave',
  FORGOT_PIN_TITLE: 'Tu seguridad nos importa',
  FORGOT_PIN_INFO_ONE:
    'Te vamos a pedir algunos datos para\nvalidar que efectivamente sos vos.',
  FORGOT_PIN_INFO_TWO:
    'Luego te enviaremos un correo para que\npuedas generar la nueva clave.',
  LOCK_ACCESS_PIN_TITLE: 'Por seguridad, bloqueamos\ntu acceso',
  LOCK_ACCESS_PIN_TEXT:
    'Superaste el máximo de intentos.\nTe vamos a pedir que crees una\nnueva clave para ingresar.',
  LOCK_ACCESS_PIN_TEXT_24:
    'Hay un máximo de intentos permitidos\npor día y hoy ya lo alcanzaste.',
  LOCK_ACCESS_PIN_FIRTS_ITEM_24: 'Registramos varios intentos fallidos',
  LOCK_ACCESS_PIN_SECOND_ITEM_24:
    'Ingresa nuevamente dentro de 24 hs\npara poder acceder a Personal Pay',
  CREATE_NEW_PIN: 'Recuperar clave',
  GO_BACK_TO_LOGIN: 'Cerrar',
  PIN_LOGIN_TYPE_TITLE: 'Ingresá tu clave',
  PIN_CREATE_TYPE_TITLE: 'Creá tu clave',
  PIN_CHANGE_SCREEN_TITLE: 'Generá tu nueva clave',
  PIN_CHANGE_TYPE_TITLE: 'Ingresá tu clave actual',
  PIN_NEW_PIN_TYPE_TITLE: 'Ingresá tu nueva clave',
  PIN_CONFIRM_TYPE_TITLE: 'Confirmá tu clave',
  INVALID_PIN_TOKEN_TITLE: 'El link que utilizaste ya venció',
  INVALID_PIN_TOKEN_DESCRIPTION:
    'Podemos enviarte un nuevo link para\nque puedas cambiar tu clave.',
  INVALID_PIN_TOKEN_RESEND_MAIL: 'Reenviar mail',
  ERROR_CONNECTION_TRY_AGAIN: 'Volver a intentar',
  VALIDATE_USER_TITLE: 'Ingresá los datos de tu DNI',
  VALIDATE_USER_INPUT_LABEL: 'Nro. de DNI',
  VALIDATE_USER_CONTINUE_BUTTON: 'Continuar',
  NEW_LOGIN_NOTICE_HEADER: 'Nuevo inicio de sesión',
  MULTISESSION_DEVICE_DETAILS_TITLE:
    'Existe un nuevo inicio de\nsesión con tu cuenta',
  MULTISESSION_DEVICE_DETAILS_MAIN_BTN: 'Sí, soy yo',
  MULTISESSION_DEVICE_DETAILS_SECONDARY_BTN: 'No reconozco este ingreso',
  MULTISESSION_NOTICE_TITLE: 'Nuevo inicio de\nsesión en tu cuenta',
  MULTISESSION_NOTICE_SUBTITLE:
    'Cerraremos todas las sesiones\nabiertas para mayor seguridad.',
  MULTISESSION_NOTICE_MAIN_BTN: 'Cerrar todas las sesiones',
  MULTISESSION_NOTICE_FIRST_ITEM:
    'Vamos a cerrar todas las sesiones\nde los dispositivos',
  MULTISESSION_NOTICE_SECOND_ITEM: 'Tendras que iniciar sesion nuevamente',
  MULTISESSION_LOGIN_VALIDATED_TITLE: '¡Listo!',
  MULTISESSION_LOGIN_VALIDATED_SUBTITLE:
    'Ya podés seguir disfrutando los\nbeneficios de Personal Pay.',
  MULTISESSION_LOGIN_VALIDATED_MAIN_BTN: 'Cerrar',
  MULTISESSION_CLOSE_SESSION_FAILURE_TITLE: 'No pudimos procesar tu validación',
  MULTISESSION_CLOSE_SESSION_FAILURE_SUBTITLE:
    'Te sugerimos volver a intentarlo\nen unos minutos.',
  MULTISESSION_CLOSE_SESSION_FAILURE_MAIN_BTN: 'Volver a intentar',
  MULTISESSION_CLOSE_SESSION_SUCCESS_TITLE:
    'Cerraste todas las\nsesiones abiertas',
  MULTISESSION_CLOSE_SESSION_SUCCESS_SUBTITLE:
    'Iniciá sesión para volver a operar\ncon normalidad.',
  MULTISESSION_CLOSE_SESSION_SUCCESS_MAIN_BTN: 'Iniciar sesión',
  MULTISESSION_SPLASSCREEEN_TITLE: 'Se inició sesión en otro dispositivo',
  MULTISESSION_SPLASSCREEEN_DESCRIPTION:
    'Vamos a enviarte un código al teléfono registrado para vincularlo.',
  MULTISESSION_SPLASSCREEEN_NOACCESS_BTN: 'No tengo acceso al teléfono',
  MULTISESSION_SPLASSCREEEN_SENDCODE_BTN: 'Enviar código',
  MULTISESSION_SPLASSCREEEN_MODAL_PRIMARY_BTN:
    'Podés volver a intentarlo cuando tengas acceso',
  MULTISESSION_SPLASSCREEEN_MODAL_SECONDARY_BTN: 'Cerrar',
  MULTISESSION_CHECKSMS_TITLE: '¿Cuál es el código que recibiste?',
  MULTISESSION_CHECKSMS_DESCRIPTION: 'Te enviamos un código de 6 dígitos al',
  MULTISESSION_CHECKSMS_VERIFY_BTN: 'Verificar',
  SMS_RATELIMIT_TITLE: `Por seguridad, bloqueamos\ntu acceso`,
  SMS_RATELIMIT_DESCRIPTION: `Hay un máximo de intentos permitidos\npor dia y hoy ya lo alcanzaste.`,
  SMS_RATELIMIT_FIRST_INFOITEM: 'Registramos varios intentos fallidos',
  SMS_RATELIMIT_SECOND_INFOITEM: `Ingresa nuevamente dentro de 24 hs\npara poder acceder a Personal Pay`,
  SMS_RATELIMIT_CLOSE_BTN: 'Cerrar',

  //PAYGILANT
  PAYGILANT_TITLE: 'Tu seguridad nos importa',
  PAYGILANT_BUTTOM_TITLE: 'Permitir',
  PAYGILANT_BUTTOM_SECUNDARY_TITLE: 'Ahora no',
  PAYGILANT_SUBTITLE:
    'Solicitamos la información de tu cuenta,\nnúmero de teléfono, contacto y correo\nelectrónico, entre otras, con el fin de agilizar tus transferencias y recargas',
  PAYGILANT_DESCRIPTION:
    'Para mejorar tu experiencia, te pedimos el uso de la información de tu cuenta.',
  PAYGILANT_BACKDROP_BUTTON_LABEL: '¿Por qué preguntamos esto?',
  PAYGILANT_BACKDROP_BUTTON_NOT_LABEL: 'Ahora no',
  PAYGILANT_TEXT:
    'Compartiremos con terceros tu número de\nteléfono, datos generales de tu cuenta de\npago, información de tu lista de contactos,\nimagen de perfil y el correo electrónico\nregistrado para:',
  PAYGILANT_FIRST_ITEM:
    'Disponibilizar la Plataforma Personal Pay,\notorgar acceso a la misma y permitir su\nutilización',
  PAYGILANT_SECOND_ITEM:
    'Revisar la calidad y mejorar la\nfuncionalidad de la aplicación',
  PAYGILANT_THIRD_ITEM:
    'Identificar posibles actividades fraudulentas y/o de lavado de activos y financiación del terrorismo',
  PAYGILANT_THIRTH_ITEM:
    'Cumplimentar las leyes y/o\nprocedimientos legales vigentes',
  PAYGILANT_POLICIES: 'Politicas de privacidad',
  PAYGILANT_ASK_DESCRIPTION:
    'Al aceptar nuestra Política de privacidad, la\ninformación sobre la cuenta, el número de teléfono,\nlos contactos, el correo electrónico y los paquetes\ninstalados se cargarán para que podamos mejorar la\nfuncionalidad de la aplicación, identificar posibles\nactividades fraudulentas y mejorar la forma en que la\naplicación funciona con su dispositivo.',
  PAYGILANT_TERMS_AND_CONDITIONS: `Ver política de privacidad`,
  PAYGILANT_TYC: `Ver términos y condiciones`,
  PAYGILANT_ACTIVE_TITLE: 'Activá los permisos',
  PAYGILANT_BUTTOM_ACTIVE_TITLE: 'Activa',
  PAYGILANT_ACTIVE_DESCRIPTION:
    'Así usás al máximo tu billetera, y\ncuidamos tu información',
  PAYGILANT_HOME_TITLE: 'Tu seguridad nos importa',
  // FAQS
  FAQS_URL: 'https://www.personalpay.com.ar/preguntas-frecuentes',
  // FAQS COMPONENT
  FAQS_TITLE: 'Seguí estos pasos',
  FAQS_ANDROID_SUPPORT: 'Si usas Android',
  FAQS_IOS_SUPPORT: 'Si usas IOS',
  FAQS_MESSAGE: `Además te recomendamos que reportes con tu operador de telefonía el robo del equipo para bloquear el IMEI.`,
  FAQS_RESOLUCION_UIF: 'Conocer más',
  FAQS_CONTACT_BUTTON: 'Contactate con nosotros',
  FAQS_CONTACT_STRING: 'contactate con nosotros',
  FAQS_CONTACT_DESC_MAIL: 'beneficiosclubpersonal@teco.com.ar',
  // FAQS CATEGORIES SCREEN
  FAQS_CATEGORIES_TITLE: '¿En qué podemos ayudarte?',
  FAQS_CATEGORIES_INPUT_PLACEHOLDER: 'Buscar',
  FAQS_CATEGORIES_EMPTY_STATE_TITLE: 'No se encontraron resultados',
  FAQS_CATEGORIES_EMPTY_STATE_SUBTITLE: 'Intenta buscando con otras\npalabras',
  // FAQS VIEW SCREEN
  FAQS_VIEW_TEXT: '¿Resolvimos tu consulta?',
  FAQS_VIEW_YES_TEXT: 'Sí',
  FAQS_VIEW_NO_TEXT: 'No',
  // FAQS SUCCESS SCREEN
  FAQS_SUCCESS_TITLE: '¡Gracias!',
  FAQS_SUCCESS_SUBTITLE: 'Tu opinión nos ayuda.',
  FAQS_SUCCESS_MAIN_BUTTON_TEXT: 'Volver al inicio',
  // DISCLAIMER COMPONENT
  DISCLAIMER_TEXT:
    `Microsistemas ofrece servicios de pago y no esta autorizada por el banco central a operar como entidad financiera. ` +
    `Los fondos acreditados en cuentas de pago no constituyen depósitos en una entidad financiera, ni estan garantizados conforme ` +
    `legislación aplicable a depositos en entidades financieras.`,
  // CASH IN SCREEN
  CASH_IN_SCREEN_TITLE: 'Agregar dinero',
  CASH_IN_TITLE: 'Elegí cómo agregar dinero',
  CASH_IN_TITLE_HELP: '¿Demoras en tus transferencias?',
  CASH_IN_DESCRIPTION:
    'Hacé una transferencia desde otra billetera o\ndesde una cuenta bancaria. Si te arrepentís',
  CASH_IN_DESCRIPTION_BOLD: 'podés sacar la plata sin costo',
  CASH_IN_CARD_TITLE_1: 'Con cuentas asociadas',
  CASH_IN_CARD_TITLE_2: 'Por transferencia',
  CASH_IN_CARD_TITLE_3: 'Con efectivo',
  CASH_IN_CARD_DESCRIPTION_1: 'Desde otros bancos o billeteras',
  CASH_IN_CARD_DESCRIPTION_2: 'Copiando tu CVU o Alias',
  CASH_IN_CARD_DESCRIPTION_3: 'En nuestros puntos de recarga',
  CASH_IN_BY_CASH_TITLE: 'Elegí tu punto de recarga',
  CASH_IN_BY_CASH_HINT_ONE: 'Cuando llegues avisá que vas a agregar dinero a',
  CASH_IN_BY_CASH_HINT_TWO: 'Solo vas a necesitar:',
  CASH_IN_BY_CASH_APP_NAME: ' Personal Pay. ',
  CASH_IN_BY_CASH_STEP_ONE: 'Tu número de DNI',
  CASH_IN_BY_CASH_STEP_TWO: 'El monto que vas a ingresar',
  CASH_IN_BY_DEBIN_DESCRIPTION:
    'Seleccioná el banco para asociar a tu\ncuenta de Personal Pay.',
  CASH_IN_BY_DEBIN_ERROR_TITLE: 'No pudimos asociar la cuenta',
  CASH_IN_BY_DEBIN_ERROR_DESCRIPTION:
    'Te sugerimos volver a intentarlo\nen unos minutos',
  CASH_IN_BY_DEBIN_ERROR_BTN_PRIMARY: 'Reintentar',
  CASH_IN_BY_DEBIN_ERROR_BTN_SECONDARY: 'Ir al inicio',
  CASH_IN_BY_DEBIN_LOADING: 'Estamos agregando el dinero a tu cuenta.',
  // WAllETS ENROLLED
  WALLETS_ENROLLED_BUTTON_PRIMARY: 'Cuentas guardadas',
  WALLETS_ENROLLED_BUTTON_SECONDARY: 'Eliminar cuenta',
  WALLETS_ENROLLED_TOOLTIP_TEXT: 'Desde acá podes agregar nuevas cuentas',

  // WALLETS TO DELETE
  WALLETS_TO_DELETE_BTN_PRIMARY: 'Volver a Cuentas asociadas',
  WALLETS_TO_DELETE_MODAL_BTN_PRIMARY: '¿Querés eliminar ',
  WALLETS_TO_DELETE_MODAL_OTHERBANKS_MESSAGE_TITLE:
    '¿Querés eliminar a Personal Pay de ',
  WALLETS_TO_DELETE_MODAL_OTHERBANKS_MESSAGE:
    'Si lo hacés, no la verás más como cuenta asociada.',
  WALLETS_TO_DELETE_MODAL_MESSAGE: 'Vas a eliminar todas las cuentas\n ',
  WALLETS_TO_DELETE_MODAL_BTN_DELETE: 'Eliminar',
  WALLETS_TO_DELETE_MODAL_BTN_CANCEL: 'Cancelar',
  WALLETS_ENROLLED_TABS_ONE: 'En Personal Pay',
  WALLETS_ENROLLED_TABS_TITLE_ONE: 'Cuentas que asociaste para traer dinero:',
  WALLETS_ENROLLED_TABS_TWO: 'En otras cuentas',
  WALLETS_ENROLLED_TABS_TITLE_TWO:
    'Tenés Personal Pay como cuenta asociada en:',
  WALLETS_EMPTY_STATE_TEXT:
    'Si asociás a Personal Pay dentro de\n otras cuentas, vas a verlas acá.',
  // CASH IN DELAYED OPERATIONS BANNER
  DELAYED_OPERATIONS_TITLE: '¿Por qué está demorada mi transferencia?',
  DELAYED_OPERATIONS_SUB_TITLE:
    'La acreditación en una transferencia es inmediata, pero pueden producirse demoras por diferentes motivos:',
  DELAYED_OPERATIONS_EXTRA_ONE:
    'Diferentes horarios de transferencias de los bancos o billeteras virtuales.',
  DELAYED_OPERATIONS_EXTRA_TWO:
    'Congestiones en horarios de mayor uso de la aplicación.',
  DELAYED_OPERATIONS_EXTRA_THREE:
    'Si no se acredita en 24 horas hábiles, comunicate con el banco o billetera desde donde realizaste la transferencia.',
  DELAYED_OPERATIONS_BUTTON: 'Ayuda por whatsApp',
  // DEBIN BANNER
  DEBIN_TITLE: 'Agregá dinero sin salir de la app',
  DEBIN_EXTRA_ONE:
    'Buscá tu banco y asociá la cuenta para \nhacer el débito inmediato.',
  DEBIN_EXTRA_TWO: 'Ingresá el importe que querés agregar.',
  DEBIN_EXTRA_THREE: '¡Listo! El dinero se acredita en minutos.',
  // BY TRANSFER SCREEN
  BY_TRANSFER_TITLE: 'Por transferencia',
  BY_TRANSFER_DESCRIPTION:
    'Copiá tu CVU o Alias, andá a la app de tu\nbanco y realizá la transferencia',
  BY_TRANSFER_CVU_LABEL: 'CVU',
  BY_TRANSFER_ALIAS_LABEL: 'Alias',
  BY_TRANSFER_ITEM_BUTTON: 'Copiar',
  BY_TRANSFER_ITEM_LINK: 'Volver al inicio',
  // HEADER LIST COMPONENT
  HEADER_LIST_TITLE: 'Mi actividad',
  // Wallet View
  HEADER_LIST_TITLE_WALLET: 'Última actividad',
  EMPTY_STATE_WALLET: 'Acá vas a ver la última actividad\nde tu billetera.',
  ERROR_STATE_WALLET: 'En minutos volverás a ver esta\ninformación.',
  ERROR_STATE_ACTIVITY: 'En minutos volverás a ver tu actividad.',
  // BALANCE HEADER COMPONENT
  BALANCE_HEADER_TITLE: 'Mi saldo',
  // TRANSACTIONS EMPTY COMPONENT
  TRANSACTIONS_EMPTY_MESSAGE:
    'Cuando empieces a usar tu\n billetera acá vas a ver el historial\n de tu actividad',
  // TRANSACTIONS LIST FOOTER COMPONENT
  TRANSACTIONS_LIST_FOOTER_MESSAGE: 'Llegaste al final,\n no hay más actividad',
  LIST_WRAPPER_FOOTER_MESSAGE: 'Llegaste al final de tu actividad.',
  WALLET_DETAIL_FOOTER_MESSAGE: 'Llegaste al final de tus movimientos.',

  // WALLET BOTTON FOR REDIRECT TO COMPLETE LIST VIEW
  WALLET_LIST_FOOTER_MESSAGE: 'Ver toda mi actividad',
  // EMPTY NOTIFICATIONS COMPONENT
  EMPTY_NOTIFICATIONS_TITLE: 'No tenes notificaciones',
  EMPTY_NOTIFICATIONS_ALL_TITLE:
    'Acá vas a encontrar las notificaciones sobre tu actividad',
  EMPTY_NOTIFICATIONS_DEBIN_TITLE:
    'Acá vas a encontrar las solicitudes de dinero que te envíen',
  EMPTY_NOTIFICATIONS_MESSAGE:
    'Cuando tengas alguna notificación\n las vas a ver acá',
  // EMPTY CONTACTS COMPONENT
  EMPTY_CONTACTS_MESSAGE:
    'Aún no tienes usuarios de Personal Pay en tu agenda de contactos',
  // SELECT PRODUCT SCREEN
  SELECT_PRODUCT_TITLE: 'Seleccioná la compañía',
  SELECT_PRODUCT_PROMOTION_DESC: 'Saldo extra',
  SELECT_PRODUCT_EMPTY_STATE:
    'No podemos mostrarte esta\ninformación ahora. Intenta en\notro momento.',
  SELECT_PRODUCT_EMPTY_STATE_CTA: 'Volver al inicio',
  SELECT_PRODUCT_TERMS_BUTTON: 'Ver términos',
  // SELECT PHONE NUMBER SCREEN
  SELECT_PHONE_NUMBER_TITLE: 'Ingresá el número',
  SELECT_PHONE_NUMBER_HINT: 'Código sin "0" y número sin "15"',
  SELECT_PHONE_NUMBER_FROM_CONTACTS_BUTTON:
    'Agregar desde tu agenda de contactos',
  SELECT_PHONE_NUMBER_NEXT_BUTTON: 'Continuar',
  SELECT_PHONE_NUMBER_INPUT_PLACEHOLDER: '1155556666',
  SELECT_PHONE_NUMBER_INPUT_ERROR: 'Parece que hay un error',
  // SELECT TRANSFER TYPE SCREEN
  SELECT_TRANSFER_TYPE_TITLE: '¿A quién le querés transferir?',
  SELECT_TRANSFER_TYPE_CARD_TITLE_1: 'A otro Personal Pay',
  SELECT_TRANSFER_TYPE_CARD_TITLE_2: 'A otro CBU, CVU o Alias',
  SELECT_TRANSFER_TYPE_NEW_TRANSFERENCE: 'Nueva transferencia',
  // LAST TRANSFERENCES COMPONENT
  LAST_TRANSFERENCES_TITLE: 'Últimas transferencias',
  LAST_TRANSFERENCES_BUTTON: 'Ver todas',
  LAST_TRANSFERENCES_SELF_TRANSFER: 'Cuenta propia',
  // SELECT FREQUENT RECIPIENT SCREEN
  SELECT_FREQUENT_RECIPIENT_PLACEHOLDER: 'Buscar',
  // TRANSFER SET AMOUNT SCREEN
  TRANSFER_SET_AMOUNT_TITLE: 'Saldo Personal Pay',
  TRANSFER_SET_AMOUNT_BUTTON: 'Continuar',
  // CONFIRM TRANSFERENCE SCREEN
  CONFIRM_TRANSFERENCE_TITLE: 'Vas a transferir dinero a',
  CONFIRM_TRANSFERENCE_BUTTON_TITLE: 'Confirmar destinatario',
  // SET CBU CVU ALIAS
  SET_CBU_CVU_ALIAS_INPUT_LABEL: 'Ingresá CBU, CVU o Alias',
  SET_CBU_CVU_ALIAS_BUTTON: 'Continuar',
  // SELECT CLIENT SCREEN
  SELECT_CLIENT_SECONDARY_BUTTON_TEXT: 'Agendar un nuevo contacto',
  SELECT_CLIENT_PRIMARY_BUTTON_TEXT: 'Transferir a otro CBU, CVU o Alias',
  SELECT_CLIENT_PLACEHOLDER_TEXT: 'Buscar un contacto',
  SELECT_CLIENT_EMPTY_SEARCH_MESSAGE: 'No se encontraron resultados',
  // PAYMENTS FLOW
  PAYMENT_BUTTON_REFERENCE: '¿Dónde lo encuentro?',
  PAYMENT_DESCRIPTION_REFERENCE:
    'Se encuentra en el margen superior derecho de la factura.',
  PAYMENT_TITLE_REFERENCE: 'Referente de pago',
  // BARCODE_SCANNING
  PAYMENTS_BARCODE_SCANNING_HEADER_TITLE:
    'Ubicá el código de barras dentro del área',
  PAYMENTS_BARCODE_SCANNING_LOADING: 'Procesando el código',
  PAYMENTS_BARCODE_SCANNING_MAIN_BUTTON: 'Ingresar el código manualmente',
  PAYMENTS_FEEDBACK_CTA_MAIN_TEXT: 'Pagar otra factura',
  PAYMENTS_FEEDBACK_CTA_SECONDARY_TEXT: 'Ir al inicio',
  PAYMENTS_FEEDBACK_BILL_NOT_FOUND:
    'No encontramos la factura\nque querés pagar',
  // PAYMENT_SERVICES_HOME
  PAYMENTS_HOME_TITLE: '¿Cómo querés pagar?',
  PAYMENTS_HOME_SEARCH: 'Buscando una\nempresa',
  PAYMENTS_HOME_SCANNING: 'Escaneando el\ncódigo de barras',
  PAYMENTS_HOME_MAIN_SERVICES: 'Empresas más buscadas',
  PAYMENTS_HOME_MAIN_SERVICES_DISCOUNT: 'Empresas destacadas',
  PAYMENTS_PRIMARY_TAB: 'Nuevo pago',
  PAYMENTS_SECONDARY_TAB: 'Recientes',
  PAYMENT_HOME_ERROR:
    'Los servicios no están disponibles.\nPor favor, intentalo más tarde.',
  PAYMENTS_SERVICES_SCAN: 'Escanear factura',
  PAYMENTS_SERVICES_SET_CUSTOMER_DATA: 'Ingresar datos de factura',
  PAYMENTS_HOME_TOOLTIP: 'Acá vas a encontrar todos\ntus comprobantes de pagos',
  PAYMENTS_HOME_TOOLTIP_V2:
    'Volvé a pagar tus servicios\nguardados desde este listado.',
  SERVICE_PAYMENT_ALERT_STATUS_DOWN: 'down',
  // REMINDED_PAYMENT
  REMINDED_PAYMENT_TITLE: 'Últimos pagos',
  REMINDED_PAYMENT_LIST_TITLE_1: 'Vencimientos',
  REMINDED_PAYMENT_LIST_TITLE_2: 'Otros pagos',
  REMINDED_PAYMENT_AGENDA_EMPTY_STATE:
    'No tenés facturas disponibles\npara pagar',
  REMINDED_EMPTY_PAYMENT_ERROR: 'En minutos volverás a ver\n esta información.',
  REMINDED_EMPTY_PAYMENT_MESSAGE:
    'Acá vas a encontrar el listado de\n los próximos servicios que pagues.',
  DELETE_REMINDED_PAYMENT_TEXT: 'Eliminar servicio',
  BACK_TO_LAST_PAYMENTS: 'Volver a últimos pagos',
  REMINDED_PAYMENT_DELETE_MODAL_TITLE: '¿Querés eliminar este servicio?',
  REMINDED_PAYMENT_DELETE_MODAL_PRIMARY_BUTTON: 'Eliminar',
  REMINDED_PAYMENT_DELETE_MODAL_SECONDARY_BUTTON: 'Cancelar',
  SUCCESS_REMINDED_PAYMENT_DELETATION_TEXT: 'Eliminamos tu servicio.',
  ERROR_REMINDED_PAYMENT_DELETATION_TEXT:
    'No se eliminó tu servicio.Volvé a intentarlo.',
  // SELECT_SERVICE
  PAYMENTS_SELECT_SERVICE_TITLE: 'Seleccioná el servicio correcto',
  PAYMENTS_SELECT_SERVICE_EXPIRED_LABEL: 'Vencimiento',
  PAYMENTS_SELECT_SERVICE_AMOUNT_LABEL: 'Monto',
  PAYMENTS_SELECT_SERVICE_IS_EXPIRED: 'Vencida',
  PAYMENTS_SELECT_SERVICE_GO_BACK: 'Volver a ingresar los datos',
  //SET_AMOUNT_SERVICE
  PAYMENTS_SET_AMOUNT_TITLE: 'Confirmá el monto a pagar',
  PAYMENTS_SET_AMOUNT_HINT: 'Podés hacer un pago parcial',
  PAYMENTS_SET_AMOUNT_SECONDARY_BUTTON: 'Ir al inicio',
  PAYMENTS_SET_AMOUNT_EARLY_PAYMENT: 'Esta vez no tenés que pagar',
  PAYMENTS_SET_AMOUNT_EARLY_PAYMENT_DESCRIPTION:
    'Si querés, podés adelantar el pago del próximo vencimiento.',
  // SET_BARCODE
  PAYMENTS_SET_BARCODE_BUTTON: 'Continuar',
  PAYMENTS_SET_BARCODE_TITLE: 'Ingresá los números\ndel código de barras',
  // SELECT_PAYMENT_METHOD
  PAYMENTS_SELECT_PAYMENT_TITLE: '¿Cómo querés pagar?',
  PAYMENTS_SELECT_PAYMENT_CARD_TITLE: 'Con saldo Personal Pay',
  PAYMENTS_SELECT_PAYMENT_CARD_TITLE_V2: 'Saldo Personal Pay',
  PAYMENTS_SELECT_PAYMENT_INSUFFICIENT_BALANCE: 'Saldo insuficiente',
  PAYMENTS_SELECT_PAYMENT_EMPTY_WALLET: 'No tenés saldo en tu cuenta',
  PAYMENTS_SELECT_PAYMENT_EMPTY_WALLET_DESC:
    'Agregá dinero para poder realizar\nel pago',
  PAYMENTS_SELECT_PAYMENT_EMPTY_WALLET_CTA: 'Agregar dinero',
  PAYMENTS_SELECT_PAYMENT_INSUFFICIENT_BALANCE_ALERT:
    'Agregá dinero a tu cuenta para poder realizar el pago',
  PAYMENTS_SELECT_PAYMENT_INSUFFICIENT_BALANCE_ALERT_CTA: 'Agregar dinero',
  PAYMENTS_SELECT_PAYMENT_CONFIRM_BUTTON: 'Hacer el pago',
  PAYMENTS_SERVICE_PAYMENT_DETAIL_DISCLAIMER:
    'Conserve el presente como comprobante. Documento no válido como factura. Emitido este comprobante no se aceptarán devoluciones ni reclamos.',
  PAYMENTS_SERVICE_PAYMENT_DETAIL_VENDOR: 'Agente oficial Rapipago',
  PAYMENTS_SERVICES_COMPANY_SEARCH_TITLE:
    'Ingresá el nombre de la\nempresa que vas a pagar',
  PAYMENTS_SERVICES_COMPANY_SEARCH_PLACEHOLDER: 'Buscar una empresa',
  // SELECT_PAYMENT_METHOD V2
  PAYMENTS_SELECT_PAYMENT_EXTRAPAY: 'Extra Pay',
  PAYMENTS_SELECT_PAYMENT_AVAILABLE: 'Disponible ',
  PAYMENTS_SELECT_PAYMENT_RECHARGE: 'Hacer recarga',
  PAYMENTS_SELECT_PAYMENT_DONT_HAVE_FUNDS: 'No tenés saldo',
  PAYMENTS_SELECT_PAYMENT_ADD_MONEY_IN_YOUR_ACCOUNT:
    'Agregá dinero a tu cuenta para poder realizar la recarga.',

  PAYMENTS_CARD_TOTALPAY_TITLE: 'Total a devolver',
  PAYMENTS_CARD_TOTALPAY_CURRENT_CUP: 'Tasa actual',
  PAYMENTS_CARD_TOTALPAY_DETAIL: 'Cargos acumulados',
  PAYMENTS_CARD_BALANCE: 'Saldo Extra Pay (desde ',
  PAYMENTS_CARD_INTERESTS: 'Intereses',
  PAYMENTS_CARD_CURRENT_RATE: '¿Cuáles son las tasas vigentes?',
  PAYMENTS_CARD_TOTAL: 'Total',
  RETURN_BALANCE_BUTTON_TITLE: 'Devolver saldo',
  RETURN_BUTTON_TITLE_EXTRAPAY: 'Activar Extra Pay',

  // SET_BILL_MODES
  PAYMENTS_SET_BILL_MODE_TITLE: 'Completá los siguientes datos',
  PAYMENTS_NEXT_BUTTON: 'Continuar',
  PAYMENTS_ERROR_STATE:
    'No podemos mostrarte esta\ninformación ahora. Intenta en\notro momento.',
  PAYMENTS_ERROR_CTA: 'Volver a intentar',
  PAYMENTS_HEADER_LIST_TITLE: 'Mis Comprobantes De Pago',
  PAYMENTS_EMPTY_MESSAGE:
    'Cuando empieces a pagar tus\n servicios acá vas a ver tus\n comprobantes de pago',
  PAYMENTS_LIST_FOOTER_MESSAGE: 'Llegaste al final,\n no hay más pagos',
  // SAVING GOALS STACK
  SAVING_GOALS_HOME_MAIN_TITLE_COMPLETED: 'Seguí cumpliendo tus metas',
  SAVING_GOALS_HOME_MAIN_TITLE_DEFAULT: '¿En qué querés ahorrar?',
  SAVING_GOALS_HOME_MAIN_TITLE_GOAL_EXISTS: '¡Empezá a ahorrar!',
  SAVING_GOALS_HOME_MAIN_TITLE_GOAL_SAVING: 'Seguí ahorrando',
  SAVING_GOALS_HOME_MAIN_TITLE_GOAL_REACHED: '¡Cumpliste tu meta!',
  SAVING_GOALS_HOME_EMPTY_STATE:
    'Creá una nueva meta de ahorro\npara llenar tu alcancía.',
  SAVING_GOALS_HOME_ERROR_STATE:
    'No podemos mostrarte esta información ahora. Intenta en otro momento.',
  SAVING_GOALS_HOME_SAVING_TIP_CTA_TITLE: 'Próximamente',
  SAVING_GOALS_HOME_SAVING_TIP_CTA_DESCRIPTION: 'Tips de super ahorrador',
  SAVING_GOALS_HOME_TABS_IN_PROGRESS: 'En progreso',
  SAVING_GOALS_HOME_TABS_COMPLETED: 'Cumplidas',
  SAVING_GOALS_HOME_TABS_IN_PROGRESS_BUTTON_PRIMARY_TEXT: 'Agregar dinero',
  SAVING_GOALS_HOME_TABS_IN_PROGRESS_BUTTON_SECONDARY_TEXT: 'Sacar dinero',
  SAVING_GOALS_DETAILS_TITLE_COMPLETED: 'Meta Cumplida',
  SAVING_GOALS_DETAILS_TITLE_DEFAULT: 'Detalle de la meta de ahorro',
  SAVING_GOALS_DETAILS_AMOUNT_NOT_COMPLETED: 'Monto a cumplir',
  SAVING_GOALS_DETAILS_AMOUNT_COMPLETED: 'Monto ahorrado',
  SAVING_GOALS_CREATE_CHOOSE_CATEGORY_MAIN_TITLE:
    '¿A qué categoría\npertenece tu Meta de ahorro?',
  SAVING_GOALS_CREATE_CHOOSE_NAME_MAIN_TITLE:
    '¿Cómo se llama tu\nMeta de ahorro?',
  SAVING_GOALS_CREATE_CHOOSE_NAME_TITLE_INPUT_PLACEHOLDER:
    '¿Cómo se llama tu meta de ahorro?',
  SAVING_GOALS_CREATE_CHOOSE_NAME_DESCRIPTION_INPUT_PLACEHOLDER:
    '¿De qué se trata tu meta de ahorro?',
  SAVING_GOALS_CREATE_CHOOSE_AMOUNT_MAIN_TITLE: '¿Cuánto querés ahorrar?',
  SAVING_GOALS_CREATE_CONFIRM_GOAL_MAIN_TITLE: 'Validá la información',
  SAVING_GOALS_CREATE_CONFIRM_GOAL_BUTTON_PRIMARY_TEXT: 'Crear meta de ahorro',
  SAVING_GOALS_CREATE_CONFIRM_GOAL_BUTTON_PRIMARY_TEXT_V2:
    'Crear Meta de ahorro',
  SAVING_GOALS_CREATE_RESULT_AVAILABLE_BALANCE_BUTTON_PRIMARY_TEXT:
    'Agregar dinero',
  SAVING_GOALS_CREATE_RESULT_UNAVAILABLE_BALANCE_BUTTON_PRIMARY_TEXT:
    'Agregar dinero a la billetera',
  SAVING_GOALS_ADD_MONEY_RESULT_BUTTON_PRIMARY_TEXT: 'Ver meta de ahorro',
  SAVING_GOALS_ADD_MONEY_RESULT_BUTTON_SECONDARY_TEXT: 'Usar dinero',
  SAVING_GOALS_ADD_MONEY_RESULT_GOAL_COMPLETED_TITLE:
    '¡Felicidades!\nCumpliste tu meta de ahorro',
  SAVING_GOALS_ADD_MONEY_RESULT_DEFAULT_TITLE:
    '¡Agregaste dinero a tu\nmeta de ahorro!',
  SAVING_GOALS_ADD_MONEY_RESULT_ACTION: 'Ver en mis Metas de ahorro',
  SAVING_GOALS_ADD_MONEY_RESULT_ERROR_TITLE: 'Algo salió mal',
  SAVING_GOALS_ADD_MONEY_MAIN_TITLE:
    '¿Cuánto querés agregar a tu meta de ahorro?',
  SAVING_GOALS_ADD_MONEY_SET_AMOUNT_TITLE: 'Saldo Personal Pay ',
  SAVING_GOALS_ADD_MONEY_BUTTON_PRIMARY_TEXT: 'Agregar dinero',
  SAVING_GOALS_ADD_MONEY_SET_AMOUNT_BUTTON: 'Continuar',
  SAVING_GOALS_ADD_MONEY_MESSAGE_AMOUNT_GREATER_THAN_BALANCE:
    'Saldo insuficiente.',
  SAVING_GOALS_ADD_MONEY_MESSAGE_AMOUNT_GREATER_THAN_GOAL:
    'Este monto supera tu meta de ahorro.',
  SAVING_GOALS_CONFIRM_ADD_MONEY_HEADER_TITLE: 'Meta de ahorro',
  SAVING_GOALS_CONFIRM_ADD_MONEY_ACCOUNT_ORIGIN: 'Saldo Personal Pay',
  SAVING_GOALS_CONFIRM_ADD_MONEY_ACCOUNT_TEXT: 'Cuenta',
  SAVING_GOALS_CONFIRM_ADD_MONEY_AMOUNT: 'Importe a agregar',
  SAVING_GOALS_CONFIRM_BREAK_RESULT_BUTTON_SECONDARY_TEXT:
    'Sí, romper alcancía',
  SAVING_GOALS_CONFIRM_BREAK_RESULT_BUTTON_PRIMARY_TEXT_V2:
    'Sí, romper alcancía',
  SAVING_GOALS_CONFIRM_BREAK_RESULT_BUTTON_SECONDARY_TEXT_V2: 'Cancelar',
  SAVING_GOALS_SHOW_WALLET_BUTTON_SECONDARY_TEXT:
    'Quiero ver el dinero de mi billetera',
  SAVING_GOALS_CREATE_SAVING_GOAL_BUTTON_PRIMARY_TEXT:
    'Crear otra meta de ahorro',
  SAVING_GOALS_ASK_BREAK_SAVING_GOALS_TITLE:
    '¿Estás seguro que querés\nromper tu alcancía?',
  SAVING_GOALS_ASK_BREAK_SAVING_GOALS_TITLE_V2:
    '¿Seguro que querés\nromper tu alcancía?',
  SAVING_GOALS_CAN_USE_MONEY_TITLE: '¡Ya podés usar tu dinero!',
  SAVING_GOALS_BROKEN_TITLE: '¡Rompiste tu alcancía!',
  SAVING_GOALS_BREAK_NOT_COMPLETE:
    'Sí la rompes , esta meta de ahorro\nno aparecerá más en tu lista',
  SAVING_GOALS_BREAK_NOT_COMPLETE_V2:
    'Si la rompes, esta meta de ahorro\nno aparecerá más en tu lista.',
  SAVING_GOALS_BREAK_WALLET: 'El dinero volverá a tu billetera.',

  //SAVING GOALS STACK V2
  SAVING_GOALS_HOME_EMPTY_STATE_V2:
    'Tus Metas de ahorro van a\naparecer acá. ¡Arrancá hoy!',
  SAVING_GOALS_HOME_SAVING_CTA_TITLE_V2: 'Nueva Meta de ahorro',
  SAVING_GOALS_CREATE_CONFIRM_GOAL_BUTTON_PRIMARY_TEXT_V2:
    'Crear Meta de ahorro',
  SAVING_GOALS_CREATE_CHOOSE_NAME_TITLE_INPUT_PLACEHOLDER_V2:
    '¿Cómo se llama tu Meta de ahorro?',
  SAVING_GOALS_CREATE_CHOOSE_NAME_DESCRIPTION_INPUT_PLACEHOLDER_V2:
    '¿De qué se trata tu Meta de ahorro?',
  SAVING_GOALS_ADD_MONEY_RESULT_DEFAULT_TITLE_V2:
    '¡Agregaste dinero a tu\nMeta!',
  SAVING_GOALS_ADD_MONEY_RESULT_DEFAULT_DESCRIPTION_V2:
    'Seguí ahorrando para cumplir\ntu proyecto.',
  SAVING_GOALS_ADD_MONEY_RESULT_ERROR_TITLE_V2:
    'No pudimos agregar\ndinero a tu Meta',
  SAVING_GOALS_ADD_MONEY_RESULT_ERROR_SUBTITLE_V2:
    'Intentalo nuevamente más tarde.',
  SAVING_GOALS_ADD_MONEY_RESULT_ERROR_ACTION: 'Ir al inicio',
  SAVING_GOALS_DETAIL_AMOUNT_V2: 'Monto ahorrado',
  SAVING_GOALS_DETAIL_PROGRESS_V2: '¡Seguí ahorrando para cumplir tu Meta!',
  SAVING_GOALS_DETAIL_PROGRESS_COMPLETED_V2:
    '¡Felicitaciones, cumpliste tu Meta!',
  SAVING_GOALS_DETAIL_DESCRIPTION_V2: 'Descripción',
  SAVING_GOALS_DETAIL_BUTTON_PRIMARY_V2: 'Agregar dinero',
  SAVING_GOALS_DETAIL_BUTTON_SECONDARY_V2: 'Retirar dinero',
  SAVING_GOALS_ADD_MONEY_RESULT_GOAL_COMPLETED_TITLE_V2:
    '¡Qué bien, ya cumpliste\ntu Meta de ahorro!',
  SAVING_GOALS_ADD_MONEY_RESULT_GOAL_COMPLETED_DESCRIPTION_V2:
    'Retirá el dinero de tu Meta para\ncumplir tu proyecto.',
  SAVING_GOALS_ADD_MONEY_RESULT_BUTTON_PRIMARY_TEXT_V2: 'Ir a Metas de ahorro',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_TITLE: 'Última actividad',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_EMPTY:
    'Acá vas a ver la última actividad \nde tu Meta de ahorro.',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_TITLE_DEPOSIT: 'Agregaste dinero',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_SUBTITLE_DEPOSIT: 'a tu Meta de ahorro',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_TITLE_WITHDRAW: 'Retiraste dinero',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_SUBTITLE_WITHDRAW: 'de tu Meta de ahorro',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_TITLE_EARNINGS: 'Ganancias obtenidas',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_SUBTITLE_EARNINGS: 'tu ahorro creció',
  SAVING_GOALS_DETAILS_LAST_ACTIVITY_BUTTON: 'Ver toda mi actividad',
  SAVING_GOALS_ACTIVITY_HISTORY_ERROR:
    'En minutos volverás a ver\nesta información.',

  // RECHARGE TRANSPORT FLOW
  TRANSPORT_CARDS_USED_TITLE: '¿Qué tarjeta vas a recargar?',
  // SELECT TRANSPORT PRODUCT SCREEN
  SELECT_TRANSPORT_PRODUCT_TITLE: 'Seleccioná la tarjeta',
  ENTER_TRANSPORT_CARD_NUMBER_TITLE: 'Ingresá los datos de tu tarjeta',
  ENTER_TRANSPORT_CARD_NUMBER_INPUT: 'Número de tarjeta',
  ENTER_TRANSPORT_CARD_NAME_INPUT: 'Nombre',
  ENTER_TRANSPORT_CARD_NEXT_BUTTON: 'Continuar',
  ENTER_TRANSPORT_CARD_REMAINDER_TITLE:
    'Al terminar la recarga, no te olvides de acreditarla',
  ENTER_TRANSPORT_CARD_REMAINDER_DESCRIPTION:
    'Hacelo apoyando tu tarjeta en una terminal SUBE',
  ENTER_TRANSPORT_CARD_REMAINDER_OK: 'Entendido',
  ENTER_TRANSPORT_CARD_GENERAL_REMAINDER_TITLE:
    'Tu recarga va a estar lista entre 24 hs. y 48 hs.',
  ENTER_TRANSPORT_CARD_24_REMAINDER_TITLE: 'Tu recarga va a estar lista 24 hs.',
  ENTER_TRANSPORT_CARD_48_REMAINDER_TITLE: 'Tu recarga va a estar lista 48 hs.',

  ENTER_TRANSPORT_CARD_GENERAL_REMAINDER_DESCRIPTION:
    'después de realizar el pago',
  ENTER_TRANSPORT_CARD_SUBE_REMAINDER_SUCCESS:
    'Recordá acreditar tu carga\nen una terminal SUBE',
  ENTER_TRANSPORT_CARD_GENERAL_REMAINDER_SUCCESS:
    'Tu recarga va a estar lista entre 24 hs. 48 hs.\n despúes de realizar el pago',
  ENTER_TRANSPORT_CARD_24_REMAINDER_SUCCESS:
    'Tu recarga va a estar lista 24 hs.\n despúes de realizar el pago',
  ENTER_TRANSPORT_CARD_48_REMAINDER_SUCCESS:
    'Tu recarga va a estar lista 48 hs.\n despúes de realizar el pago',

  TRANSPORT_RECHARGE_HEADER_TITLE: 'Recarga de transporte',
  TRANSPORT_COMPANY_UNAVAILABLE: 'Próximamente',
  SELECT_TRANSPORT_COMPANY_TITLE: 'Seleccioná la tarjeta',
  TRANSPORT_RECHARGE_CONFIRM_IDENTIFIER_LABEL: 'Número de tarjeta',
  TRANSPORT_RECHARGE_CONFIRM_AMOUNT_LABEL: 'Monto',
  TRANSPORT_RECHARGE_CONFIRM_BUTTON: 'Hacer la recarga',
  // PREPAID CARD STACK
  PREPAID_CARD_REQUEST_CARD_MAIN_TITLE: '¿Todavía no la tenés?',
  PREPAID_CARD_REQUEST_CARD_BUTTON_TEXT: 'Activar tarjeta virtual',
  PREPAID_CARD_REQUEST_CARD_PENDING_ALERT_TITLE: '¡Cada vez falta menos!',
  PREPAID_CARD_REQUEST_CARD_PENDING_ALERT_DESCRIPTION:
    'Tu solicitud de tarjeta virtual está en progreso. Te avisamos cuando esté activa.',
  PREPAID_CARD_REQUESTED_PROGRESS: 'Solicitud en proceso',
  PREPAID_CARD_REQUESTED_ALERT_BOX_TITLE: 'Estamos procesando tu solicitud',
  PREPAID_CARD_REQUESTED_ALERT_BOX_DESC:
    'Te vamos a avisar cuando la tarjeta\nesté aprobada.',
  PREPAID_CARD_HOME_HEADER_TITLE: 'Mi tarjeta prepaga',
  PREPAID_CARD_HOME_SHOW_DATA_BUTTON_TEXT: 'Mostrar datos',
  PREPAID_PHYSICAL_CARD_HOME_SHOW_DATA_BUTTON_TEXT: 'Mostrar datos',
  PREPAID_CARD_HOME_OPTIONS_PAUSE_TEXT: 'Pausar tarjeta',
  PREPAID_CARD_HOME_OPTIONS_DISABLE_TEXT: 'Dar de baja tarjeta virtual',
  PREPAID_CARD_HOME_OPTIONS_TRACKING_ORDER_TEXT: 'Seguir envío de mi tarjeta',
  PREPAID_CARD_HOME_OPTIONS_ADDITIONAL_LIMIT: 'Establecer límite de consumo',
  PREPAID_CARD_HOME_OPTIONS_ADDITIONAL_LIMIT_MODIFY:
    'Modificar límite de consumo',
  PREPAID_CARD_HOME_OPTIONS_ADDITIONAL_LIMIT_DETAILS: 'Detalle de límite',
  PREPAID_CARD_HOME_ALERT_BOX_TITLE: 'No tenés saldo en tu billetera',
  PREPAID_CARD_HOME_BUTTON_VIRTUAL_CARD: 'Mi tarjeta Personal Pay',
  PREPAID_CARD_HOME_ALERT_BOX_DESCRIPTION:
    'Ingresá dinero en tu cuenta \npara poder usar tu tarjeta Personal Pay',
  PREPAID_CARD_HOME_WARNING_TITLE: 'Lo sentimos, \nalgo salió mal',
  PREPAID_CARD_HOME_WARNING_BUTTON_TEXT: 'Ayuda por whatsapp',
  PREPAID_CARD_HOME_WARNING_MESSAGE_REQUEST:
    'Excediste el numero máximo \nde peticiones de tarjetas virtuales.',
  PREPAID_CARD_HOME_WARNING_MESSAGE_SUPPORT:
    'Para solucionar tu problema \ncontactate con nosotros.',
  VALIDATION_DATE: 'Validación de datos personales',

  // PHYSICAL CARD
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_THEFT_AND_LOSS_TEXT:
    'Reportar por robo o extravío',
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_THEFT_AND_LOSS_TEXT:
    'Reportar por robo o extravío',
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_THEFT_AND_LOSS_TEXT_CONFIRM_TEXT:
    'Confirmar el robo o extravío',
  PREPAID_PHYSICAL_SET_LIMIT_MANAGMENT_TEXT: 'Establecer límite de consumo',
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_THEFT_AND_LOSS_TEXT_RESULT_TEXT:
    'Bloqueo exitoso',

  // ADDITIONAL CARD
  PREPAID_ADDITIONAL_CARD_TITLE: 'Tarjeta adicional',
  PREPAID_ADDITIONAL_CARD_PRINCIPAL: 'Principal',
  PREPAID_ADDITIONAL_CARD_Additional: 'Adicionales',

  // CARD LIST
  PREPAID_HORIZONTAL_LIST_CARD_UNDERWAY: 'En camino',
  PREPAID_HORIZONTAL_LIST_CARD_PENDING: 'Pendiente',

  // ADDITIONAL CARD UNSUBSCRIBE
  UNSUBSCRIBE_ADDITIONAL_CARD_SUBTITLE:
    'Si dás de baja\nla tarjeta adicional...',
  UNSUBSCRIBE_ADDITIONAL_CARD_TEXT_1:
    'Quedará inhabilitada y no vas a poder utilizarla.',
  UNSUBSCRIBE_ADDITIONAL_CARD_TEXT_2:
    'Podrás solicitar una nueva tarjeta cuando quieras.',
  UNSUBSCRIBE_ADDITIONAL_CARD_BUTTON_PRIMARY: 'Volver al inicio',
  UNSUBSCRIBE_ADDITIONAL_CARD_BUTTON_SECONDARY: 'Dar de baja',

  // ADDITIONAL CARD UNSUBSCRIBE SUCCESS
  UNSUSCRIBE_ADDITIONAL_CARD_SUCCESS_ITEM__0: 'La tarjeta quedó inhabilitada.',
  UNSUSCRIBE_ADDITIONAL_CARD_SUCCESS_BUTTON: 'Ir al inicio',
  UNSUSCRIBE_ADDITIONAL_CARD_SUCCESS_TITLE:
    'Diste de baja\nla tarjeta adicional',

  // ADDITIONAL CARD FAILURE

  PREPAID_ADDITIONAL_CARD_FAILURE: 'Ir al incio',

  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_DISABLE_TEXT: 'Dar de baja tarjeta física',
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_CREATE_PIN: 'Crear Pin de cajero',
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_UPDATE_PIN: 'Cambiar Pin de cajero',
  PREPAID_PHYSICAL_CARD_HOME_HEADER_TITLE: 'Mi tarjeta',
  PREPAID_PHYSICAL_CARD_HOME_CARD_PAUSED_DESCRIPTION:
    'Mientras tu tarjeta esté pausada\nno podrás realizar compras',
  PREPAID_PHYSICAL_HOME_ALERT_BOX_TITLE: 'No tenés saldo en tu billetera',
  PREPAID_PHYSICAL_CARD_HOME_ALERT_BOX_DESCRIPTION:
    'Ingresá dinero en tu cuenta \npara poder usar tu tarjeta Personal Pay',
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_NEARBY_ATM: 'Extraer dinero en cajeros',
  PREPAID_PHYSICAL_CARD_HOME_OPTIONS_REPRINT: 'Reimprimir mi tarjeta',
  PREPAID_CARD_REPORTED_TITLE: 'Tu tarjeta fue denunciada',
  PREPAID_CARD_REPORTED_DESCRIPTION:
    'Ya podés solicitar la reimpresión desde esta sección',
  PREPAID_PHYSICAL_LOCKED_FRAUD_TITLE: 'Tu tarjeta está inhabilitada',
  PREPAID_PHYSICAL_LOCKED_FRAUD_DESCRIPTION:
    'Para más información por favor \ncomunicate con nosotros',
  PREPAID_PHYSICAL_LOCKED_FRAUD_TITLE_BUTTON: 'Ayuda por whatsapp',

  // PREPAID CARD SUB ACCOUNT

  PREPAID_CARD_SUB_ACCOUNT_CHANGE_BALANCE:
    '¡Listo! Cambiaste tu tarjeta\na cuenta de beneficios',
  PREPAID_CARD_SUB_ACCOUNT_NOTIFY:
    'Te vamos a avisar cuando este listo para usar',
  PREPAID_CARD_SUB_ACCOUNT_MOD: 'Modo',
  PREPAID_CARD_SUB_ACCOUNT_BALANCE: 'Cuenta de beneficios',
  PREPAID_CARD_SUB_ACCOUNT_AVAILABLE_BALANCE: 'Saldo disponible',
  PREPAID_CARD_SUB_ACCOUNT_NEXT_PURCHASE:
    'Tus proximas compras se debitará de la cuenta de beneficios',

  // Limit Card
  LIMIT_CARD_TITLE_HEADER: 'Establecer límite de consumo',
  LIMIT_CARD_ENTER_MOUNT: 'Ingresa el límite\n que querés para la tarjeta',
  LIMIT_CARD_SELECT_LIMIT: 'Elegí el tipo de límite',
  LIMIT_CARD_CHANGE_OTHER_IMPORT: 'Ingresar otro Importe',
  LIMIT_CARD_REQUEST_LIMIT: 'Solicitar límite',
  LIMIT_CARD_CONFIRM_LIMIT: 'Confirmar límite',
  LIMIT_CARD_MODIFY_LIMIT: 'Modificar límite',
  LIMIT_CARD_WEEKLY_LIMIT: 'Límite semanal',
  LIMIT_CARD_LIMIT_MONTHLY: 'Límite mensual',
  LIMIT_CARD_MOUNT_5000: '5000',
  LIMIT_CARD_MOUNT_10000: '10000',
  LIMIT_CARD_MOUNT_15000: '15000',
  LIMIT_CARD_MOUNT_20000: '20000',
  LIMIT_CARD_AMOUNT_FOR_THE_LIMIT: 'Monto para el límite',
  LIMIT_CARD_TYPE_FOR_THE_LIMIT: 'Tipo de límite',
  LIMIT_CARD_CURRENT_LIMIT: 'Límite actual: $ ',

  // DISCOUNTS STACK
  DISCOUNTS_HOME_HEADER_CTA_TITLE: 'Mis descuentos',
  DISCOUNTS_HOME_HEADER_TITLE: 'Descuentos',
  DISCOUNTS_HOME_HEADER_CTA_DESCRIPTION: 'Descuentos solicitados y favoritos',
  DISCOUNTS_HOME_TABS_LEFT: 'Club Personal',
  DISCOUNTS_HOME_TABS_RIGHT: 'Personal Pay',
  DISCOUNTS_ERROR_STATE_MESSAGE:
    'No podemos mostrarte esta información ahora. Intenta en otro momento.',
  DISCOUNTS_DETAILS_PRIMARY_BUTTON_TEXT: 'Quiero mi descuento',
  DISCOUNTS_DETAILS_SECONDARY_BUTTON_TEXT: 'Volver a Descuentos',
  DISCOUNTS_DETAILS_SECONDARY_BUTTON_TEXT_MAP: 'Ver más descuentos',
  DISCOUNTS_DETAILS_LEGAL_TITLE: 'Legales',
  DISCOUNTS_PROMOTION_DETAILS_LEGAL_TITLE: 'Ver términos y condiciones',
  DISCOUNTS_DETAILS_TABS_LEFT: 'Detalle',
  DISCOUNTS_DETAILS_TABS_RIGHT: '¿Dónde lo uso?',
  DISCOUNTS_DETAILS_BACKDROP_TITLE: 'Términos y condiciones',
  DISCOUNTS_DETAILS_BACKDROP_BUTTON_TEXT: 'Acepto términos y condiciones',
  DISCOUNTS_GENERATE_YOUR_CODE: '¡Generamos tu código!',
  DISCOUNTS_GENERATE_YOUR_CODE_DISABLED:
    '¡Generamos tu código,\npero es para otro día!',
  DISCOUNTS_GENERATE_YOUR_CODE_ERROR_TITLE: 'Algo salió mal',
  DISCOUNTS_GENERATE_YOUR_CODE_ERROR_DESCRIPTION:
    'No pudimos generar tu código.\nVolvé a intentar a\nla brevedad.',
  DISCOUNTS_GENERATE_YOUR_CODE_ERROR_HEADER_TITLE:
    'No pudimos generar tu código',
  DISCOUNTS_ADDITIONAL_INFORMATION: 'Información adicional',
  DISCOUNT_NOT_AVAILABLE:
    'Este descuento es para otro día, pero no te preocupes se guarda en la sección solicitados.',
  DISCOUNTS_GO_TO_DISCOUNTS: 'Volver a Descuentos',
  DISCOUNTS_SEE_REDEEM_DISCOUNTS: 'Ver mis descuentos solicitados',
  DISCOUNTS_PERSONAL_PAY_MESSAGE: 'Pagá con Personal Pay, ',
  DISCOUNTS_PERSONAL_PAY_CONTENT:
    'de la manera\nmás rápida y segura y disfrutá de los\nmejores beneficios.',
  DISCOUNTS_USER_TABS_LEFT: 'Solicitados',
  DISCOUNTS_USER_TABS_RIGHT: 'Favoritos',
  DISCOUNTS_FAVOURITE_EMPTY_MESSAGE:
    'Tus descuentos favoritos\nsiempre al alcance de tu mano',
  DISCOUNTS_SUBCATEGORY_EMPTY_MESSAGE: 'En este momento no hay descuentos de ',
  DISCOUNTS_SEARCH_NOT_FOUND_MESSAGE: 'No se encontró ningún beneficio',
  DISCOUNTS_REQUESTED_EMPTY_MESSAGE:
    'Acá se van a guardar tus descuentos\nsolicitados de Personal pay\ny Club Personal.',
  DISCOUNTS_EXPLORE_ALL_BUTTON: 'Explorar todos los beneficios',
  DISCOUNTS_SEE_ALL_BUTTON: 'Ver todos los beneficios',
  DISCOUNTS_CALL_TO_ACTION_MESSAGE:
    'Para poder usar estos beneficios\ntenés que terminar con el registro.',
  DISCOUNTS_CALL_TO_ACTION_MODAL:
    '¡Ya podés usar tus descuentos! Validá tu identidad para tenerlos todos',
  DISCOUNTS_LOCK_ONBOARDING_ACTION_MODAL:
    'Validá tu identidad para poder usar este beneficio',
  DISCOUNTS_CALL_TO_ACTION_LINK: 'Continuar',
  DISCOUNTS_LOCK_ONBOARDING_ACTION_MODAL_LINK: 'Validar identidad',
  DISCOUNTS_VIEW_ALL: 'Ver todos',
  DISCOUNTS_ALL: 'Descubrir más beneficios',
  DISCOUNT_HOME_TOOLTIP_TEXT:
    'Acá vas a encontrar tus descuentos solicitados y favoritos',
  DISCOUNTS_CAROUSEL_CLUB_TITLE: 'Descuentos Destacados',
  DISCOUNTS_CAROUSEL_PERSONAL_TITLE: 'Descuentos Personal Pay',
  DISCOUNTS_CAROUSEL_PERSONAL_EXCLUSIVE: 'Promociones exclusivas ',
  DISCOUNTS_CAROUSEL_LAST_ITEM_BUTTON: 'Ver todos',
  DISCOUNTS_CAROUSEL_EMPTY_STATE:
    'Acá vas a encontrar los descuentos disponibles de ',
  DISCOUNTS_CAROUSEL_EMPTY_STATE_BOLD: 'Club Personal.',
  DISCOUNTS_HOME_CARD_EMPTY_STATE: 'Acá vas a encontrar un descuento ',
  DISCOUNTS_HOME_CARD_EMPTY_STATE_BOLD: 'exclusivo para vos.',
  DISCOUNTS_HOME_CARD_EMPTY_STATE_DISCOUNTS:
    'En esta sección vas a ver los descuentos disponibles.',
  DISCOUNTS_HOME_CARD_EMPTY_STATE_REFUNDS:
    'En esta sección vas a ver los reintegros disponibles.',
  DISCOUNTS_HOME_CARD_EMPTY_STATE_DISCOUNTS_BOLD: 'descuentos disponibles',
  DISCOUNTS_HOME_CARD_EMPTY_STATE_REFUNDS_BOLD: 'reintegros disponibles',
  DISCOUNTS_HOME_CARD_EMPTY_STATE_ERROR:
    'Tuvimos un problema para cargar los descuentos.',
  DISCOUNTS_HOME_CARD_EMPTY_STATE_ERROR_BOLD: 'descuentos',
  DISCOUNT_HOME_LTV_CAROUSEL_TITLE:
    '¡Más usás Personal Pay, más beneficios tenés!',
  DISCOUNTS_REFUND_HOME_CARD_EMPTY_STATE_ERROR:
    'Tuvimos un problema para cargar los reintegros.',
  DISCOUNTS_REFUND_HOME_CARD_EMPTY_STATE_ERROR_BOLD: 'reintegros',
  DISCOUNT_NO_LOCATION_HERE: 'No encontramos sucursales',
  DISCOUNT_NO_LOCATION_GO_BACK: 'Volvé a intentar en otro momento.',
  DISCOUNT_COUPON_LEGALES: 'Legales',
  DISCOUNT_COUPON_COPIAR: 'Se copió tu código',
  DISCOUNTS_COUPON_SUBTITLE: 'Podés usarlo',
  DISCOUNTS_TITLE_TODAY: 'Descuentos para hoy',
  DISCOUNTS_FINISH_SCROLL_EMPTY_STATE:
    'Llegaste al final, no hay más beneficios por acá.',
  DISCOUNTS_SEE_MORE_DISCOUNTS: 'Ver más descuentos',
  DISCOUNTS_MAXLIMIT_DISCOUNTS_MESSAGE:
    'Llegaste al límite de solicitudes para este descuento',
  DISCOUNTS_OFFICES: 'Sucursales',
  DISCOUNTS_OFFICE: 'Sucursal',
  DISCOUNTS_WHEN_YOU_WANT: 'Las veces que quieras',
  DISCOUNTS_SEARCH: 'Buscar un beneficio',
  DISCOUNTS_CAROUSEL_CARD_EMPTY_STATE:
    'Próximamente vas a encontrar nuevos descuentos exclusivos',
  DISCOUNTS_CAROUSEL_CLUB_TITLE_RECOMENDED: 'Descuentos Recomendados',
  DISCOUNTS_SHARE_TEXT: 'Mirá este descuento de Personal Pay del',
  DISCOUNTS_SHARE_CLUB_URL:
    'https://www.personalpay.com.ar/deeplink?route=discounts/',
  DISCOUNTS_SHARE_PEPA_URL:
    'https://www.personalpay.com.ar/deeplink?route=discounts/promotion/',
  DISCOUNTS_IDENTITY_VALIDATION_MODAL:
    'Validá tu identidad para poder acceder a este descuento',
  DISCOUNTS_TEXT_BUTTON_IDENTITY_VALIDATION_MODAL: 'Validar identidad',
  DISCOUNTS_HOMEV3_CARD_REFUNDS: 'Reintegros',
  DISCOUNTS_SEARCH_TITLE: 'Buscar',
  DISCOUNTS_CATEGORY_TITLE: 'Categorías',
  DISCOUNTS_ALL_CATEGORY_TITLE: 'Todas las categorías',
  DISCOUNTS_REFUNDS_TITLE: 'Reintegros',
  DISCOUNTS_REFUND_TITLE: 'Reintegro',
  DISCOUNTS_MAP_TITLE: 'Mapa',
  DISCOUNTS_TILE_FRIENDLY_REMINDER: '¿Cada cuánto puede usarse?',
  DISCOUNTS_LINK_TYC: 'Ver términos y condiciones',
  DISCOUNTS_PAY_WITH: 'Pagá con',
  DISCOUNTS_CARD_PREPAID: 'Tarjeta Prepaga Visa Personal Pay',
  DISCOUNTS_QR_PERSONAL: 'QR Personal Pay',
  DISCOUNTS_BUTTON_BRANCHES: 'Sucursales',
  DISCOUNTS_BUTTON_BUY_ONLINE: 'Comprar online',
  DISCOUNTS_PROMOTION_DEEPLINK_ROUTE: 'discounts/promotion',
  DISCOUNTS_DEEPLINK_ROUTE: 'discounts',
  DISCOUNTS_EMPTY_CATEGORY_SEARCH_TEXT:
    'En este momento no hay beneficios de #.',
  DISCOUNTS_EMPTY_SUBCATEGORY_SEARCH_TEXT:
    'No se encontraron descuentos para # en este momento.',
  DISCOUNTS_ACCUMULATE_CARROUSEL_TITLE: 'Beneficios que combinan. ¡Ahorrá más!',
  DISCOUNTS_ACCUMULATE_CARROUSEL_SUBTITLE: 'Podés acumular este beneficio con:',
  DISCOUNTS_ACCUMULATE_CARROUSEL_SUBTITLE_HIGHLIGHT_WORDS:
    'acumular, este, beneficio',
  DISCOUNTS_ACCUMULATE_FOOTER_DESCRIPTION: benefitType =>
    `*El ${benefitType} se acumula a este beneficio`,
  DISCOUNTS_ACCUMULATE_FOOTER_DESCRIPTION_PLURAL: benefitType =>
    `*El ${benefitType} se acumula a estos beneficios`,
  DISCOUNTS_ACCUMULATE_NO_LIMIT: '¡Sin Tope!',
  DISCOUNTS_HOW_TO_USE: '¿Cómo puedo usar este beneficio?',
  DISCOUNTS_MORE_INFORMATION: 'Más informacion:',
  DISCOUNTS_TERMS_OF_USE: 'Condiciones de uso:',
  DISCOUNTS_UNTIL_THE: 'Hasta el',
  DISCOUNT_CARROUSEL_CATEGORY_TITLE: 'Buscar por categoría',
  DISCOUNTS_BACKDROP_ONBOARDING_BUTTON_VALIDATE: 'Validar mi identidad',
  DISCOUNTS_BACKDROP_ONBOARDING_BUTTON_LATER: 'Más tarde',
  DISCOUNTS_BACKDROP_ONBOARDING_TITLE: 'Completá tu registro',
  DISCOUNTS_BACKDROP_ONBOARDING_DESCRIPTION:
    'Validá tu identidad para poder usar este beneficio',
  DISCOUNTS_LEVEL_TITLE: 'Niveles y beneficios',
  DISCOUNTS_BENEFITS_TITLE: 'Beneficios',
  DISCOUNTS_LIMITAMOUNT: 'Tope',
  BENEFITS_DISCOUNT_TITLE: 'Todos los descuentos',
  BENEFITS_CASHBACK_TITLE: 'Todos los reintegros',
  BENEFITS_FINISH_SCROLL_EMPTY_STATE:
    'Llegaste al final, no hay más beneficios por acá.',
  DISCOUNTS_DETAIL_TITLE: 'Descuento',
  BENEFITS_WHERE_TO_USE: 'Podés usarlo',
  BENEFITS_CTA_RETRY: 'Reintentar',
  BENEFITS_ONBOARDING_ALERT_TITLE: 'Completá tu registro',
  BENEFITS_ONBOARDING_ALERT_DESCRIPTION:
    'Validá tu identidad para poder usar los beneficios',
  BENEFITS_ONBOARDING_ALERT_CTA: 'Validar',
  BENEFIT_PAYMENT_METHODS_TITLE: 'Pagá con',
  BENEFIT_WHERE_TO_USE_TITLE: 'Podés usarlo',
  BENEFIT_UNTIL_THE_TEXT: dueDate => `Válido hasta el ${dueDate}`,
  BENEFIT_TERMS_OF_USE: 'Condiciones de uso',
  BENEFITS_ACC_CONTENT_REFUND:
    'Al pagar con Personal Pay, te reintegramos el dinero justo después de tu compra.',
  BENEFITS_ACC_CONTENT_DISCOUNT:
    'Al pagar con Personal Pay, te descontamos en el acto.',
  BENEFITS_ACC_TITLE_DISCOUNT: '¿Cómo funcionan los descuentos?',
  BENEFITS_ACC_TITLE_REFUND: '¿Cómo funcionan los reintegros?',

  // TERMS AND COND
  TERMS_OF_SERVICES: 'Terminos y condiciones del servicio',
  TERMS_AND_CONDITIONS_URL: 'www.personalpay.com.ar/terminos-y-condiciones/tyc',
  TERMS_AND_POLICIES: 'Politicas de privacidad del servicio',
  PREPAID_CARD_STATUS_PAUSED_TITLE: 'Tarjeta pausada',
  TERMS_AND_CONDITIONS_RECHARGE:
    'https://www.personalpay.com.ar/terminos-y-condiciones/promociones',
  //PRIVACY POLICIES
  PRIVACY_POLICIES_PDF_ROUTE:
    'publish-p32363-e119350.adobeaemcloud.com/content/dam/cms-personal-pay/legales/Pol_Privacidad.pdf',

  // PREPAID CARD PHYSICAL
  PREPAID_CARD_PHYSICAL: 'Activar mi tarjeta física',
  PREPAID_CARD_PHYSICAL_REQUEST_TEXT: 'Quiero mi tarjeta física',
  PREPAID_CARD_PHYSICAL_TITLE: 'Tarjeta visa internacional',
  PREPAID_CARD_PHYSICAL_SUBTITLE: '¡Una tarjeta gratis\npara todo!',
  PREPAID_CARD_ACTIVATE_PHYSICAL_REPRINT_TEXT: 'Activar mi nueva tarjeta',
  // PART OF THE SAME SENTENCE
  PREPAID_CARD_PHYSICAL_BAY_STORE_ITEM: 'Comprá en tus locales favoritos y\n',
  PREPAID_CARD_PHYSICAL_WITHDRAWALS: 'retirá efectivo ',
  PREPAID_CARD_PHYSICAL_ATM: 'en cajeros cuando\nlo necesites.',
  // PART OF THE SAME SENTENCE
  PREPAID_CARD_PHYSICAL_LOAD: 'Cargala ',
  PREPAID_CARD_PHYSICAL_FROM_APP: 'desde la App, ',
  PREPAID_CARD_PHYSICAL_DEPOSIT_MONEY: 'ingresando plata a tu billetera.',
  // PART OF THE SAME SENTENCE
  PREPAID_CARD_PHYSICAL_FREE_FOREVER: 'Gratis para siempre, ',
  PREPAID_CARD_PHYSICAL_FREE_OF_CHARGE: 'sin costos de mantenimiento.',
  // ICON SELECTOR CARD
  ICON_SELECTOR_CARD_TITLE: 'Elegí un ícono que te guste',
  ICON_SELECTOR_CARD_CONTINUE_BUTTON: 'Continuar',
  // PREPAID CARD CUSTOMIZE
  PREPAID_CARD_CUSTOMIZE_TITLE: 'Personalizá tu tarjeta',
  PREPAID_CARD_CUSTOMIZE_WITH_ICON_BUTTON: 'Con icono',
  PREPAID_CARD_CUSTOMIZE_WITHOUT_ICON_BUTTON: 'Sin icono',
  // PART OF THE SAME SENTENCE
  PREPAID_CARD_CUSTOMIZE_CHOOSE_LABEL: 'Podés elegir un ',
  PREPAID_CARD_CUSTOMIZE_ICON_LABEL: 'icono ',
  PREPAID_CARD_CUSTOMIZE_LIKE_LABEL: 'que te guste',
  // PART OF THE SAME SENTENCE
  PREPAID_CARD_CUSTOMIZE_WITHOUT_ICON_LABEL:
    'Si no querés un icono, también podés no utilizarlo.',
  // PREPAID CARD STEPPER
  PREPAID_CARD_STEP_CUSTOM_LABEL: 'Personalizá',
  PREPAID_CARD_STEP_CHECK_LABEL: 'Revisá datos',
  PREPAID_CARD_STEP_ADRESS_LABEL: 'Dirección de envío',
  // PREPAID CARD CUSTOM NAME
  PREPAID_CARD_HOME_CARD_PAUSED_DESCRIPTION:
    'Mientras tu tarjeta esté pausada\nno podrás realizar compras',
  PREPAID_CARD_GENERIC_ERROR:
    'No podemos mostrarte esta\n información ahora.\nIntenta en otro momento.',
  PREPAID_CARD_CUSTOM_NAME: 'Nombre de pila',
  PREPAID_CARD_CUSTOM_NAME_TRY_AGAIN: 'Volver al inicio',
  PREPAID_CARD_CUSTOM_NAME_FRONT_VIEW: 'Vista previa frente',
  PREPAID_CARD_CUSTOM_NAME_BACK_VIEW_YOUR_NAME:
    'Así se verá el dorso de tu tarjeta',
  PREPAID_CARD_CUSTOM_NAME_BACK_VIEW: 'Dorso',
  PREPAID_CARD_CUSTOM_NAME_HOW_VIEW_YOUR_NAME: '¿Cómo querés ver tu nombre?',
  PREPAID_CARD_CUSTOM_NAME_CONTINUE: 'Continuar',
  PREPAID_CARD_CUSTOM_NAME_PREVIEW: 'Vista previa',
  PREPAID_CARD_CUSTOM_NAME_EDIT: 'Editar',
  PREPAID_CARD_CUSTOM_NAME_BACK_VIEW_ITEM:
    'Los datos de la tarjeta son a modo de referencia.',
  PREPAID_CARD_CUSTOM_NAME_FRONT_DESIGN: 'Validación',
  PREPAID_CARD_CUSTOM_NAME_FULL_NAME_BACK: 'Nombre y apellido completos',
  // PREPAID CARD CHECK DATA
  PREPAID_CARD_CHECK_DATA_TITLE: 'Revisá la información de frente y dorso',
  PREPAID_CARD_CHECK_DATA_BUTTON: 'Continuar',
  // PREPAID CARD ADD ADDRESS
  PREPAID_CARD_SELECT_ADDRESS: 'Seleccioná una opción',
  PREPAID_CARD_MY_ADDRESS: 'Mi dirección',
  PREPAID_CARD_OTHER_ADDRESS: 'Otra',
  PREPAID_CARD_SEND_ADDRESS: 'Enviar a otra dirección',
  PREPAID_CARD_WHERE_SEND_TITLE: '¿A dónde enviamos tu tarjeta?',
  PREPAID_CARD_WHAT_YOUR_ADDRESS: '¿Cuál es la dirección \nde envío?',
  // PART OF THE SAME SENTENCE
  PREPAID_CARD_CHECK_DATA_NAMES_LABEL:
    'Si tenés más de un nombre , podés elegir solo uno para el frente de tu tarjeta.',
  PREPAID_CARD_CHECK_DATA_FINISH_LABEL:
    'Al finalizar el proceso, revisá el dorso de tu tarjeta.',
  PREPAID_CARD_ADD_OTHER_ADDRESS: 'Enviar a otra dirección',
  PREPAID_CARD_SEARCH_GOOGLE_ADDRESS: 'Búsqueda de direcciones Google Maps',
  PREPAID_CARD_ADDRESS_TRAY_AGAIN: 'Volver a intentar',
  PREPAID_CARD_ADDRESS_CONTINUE: 'Continuar',
  // PREPAID CARD COMPLETE SHIPPING ADDRESS
  COMPLETE_SHIPPING_ADDRESS_TITLE: 'Tu dirección',
  COMPLETE_SHIPPING_ADDRESS_LABEL: 'Dirección',
  COMPLETE_SHIPPING_ADDRESS_INFO_LABEL: 'Información opcional',
  COMPLETE_SHIPPING_ADDRESS_CONFIRM_BUTTON: 'Confirmar',
  // PREPAID CARD INCOMPLETE SHIPPING ADDRESS
  INCOMPLETE_SHIPPING_ADDRESS_DATA_LABEL: 'Completá los siguientes datos',
  INCOMPLETE_SHIPPING_ADDRESS_STREET_LABEL: 'Nombre de la calle',
  INCOMPLETE_SHIPPING_ADDRESS_NUMBER_LABEL: 'Número',
  INCOMPLETE_SHIPPING_ADDRESS_POSTALCODE_LABEL: 'Código Postal',
  // PREPAID CARD CONFIRM SHIPPING ADDRESS
  CONFIRM_SHIPPING_ADDRESS_TITLE: 'Por último , confirmá tus datos',
  CONFIRM_SHIPPING_ADDRESS_STREET: 'Dirección',
  CONFIRM_SHIPPING_ADDRESS_POSTAL_CODE: 'Código postal',
  CONFIRM_SHIPPING_ADDRESS_OPTIONAL_INFO: 'Informacion Opcional',
  CONFIRM_SHIPPING_ADDRESS_COMMENTS: 'Comentarios',
  CONFIRM_SHIPPING_ADDRESS_ACCEPT_CARD: `Esta es la dirección a la que quiero\nque llegue mi tarjeta Personal Pay`,
  CONFIRM_SHIPPING_ADDRESS_REQUEST_BUTTON: 'Solicitar tarjeta',
  CONFIRM_SHIPPING_ADDRESS_EDIT_BUTTON: 'Editar datos de envío',
  // ACTIVATE PHYSICAL CARD
  ACTIVATE_PHYSICAL_CARD_TITLE: 'Activá tu tarjeta',
  ACTIVATE_PHYSICAL_CARD_DESCRIPTION:
    'Completá  ingresando los últimos 4\ndígitos de tu tarjeta física\nPersonal Pay.',
  ACTIVATE_PHYSICAL_CARD_BUTTON: 'Activar tarjeta física',
  // PREPAID CARD PHYSICAL SUCCESS
  PREPAID_CARD_PHYSICAL_SUCCESS_GO_HOME: 'Volver al inicio',
  PREPAID_CARD_PHYSICAL_SUCCESS_FINISH: 'Terminamos',
  PREPAID_CARD_PHYSICAL_SUCCESS_SEND_CARD: '¡Listo!\nTe enviaremos tu tarjeta',
  PREPAID_CARD_PHYSICAL_ASYNC_SEND_CARD:
    '¡Listo!\nTu solicitud está en proceso',
  PREPAID_CARD_PHYSICAL_ASYNC_SUB_CARD:
    'Te vamos a avisar cuando la\ntarjeta esté lista',
  PREPAID_CARD_PHYSICAL_SUCCESS_NOTIFICATION_ITEM:
    'Te vamos a avisar cuando esté lista',
  PREPAID_CARD_ASYNC_SEND_CARD: '¡Listo!\nTu solicitud está en proceso',
  PREPAID_CARD_ASYNC_SUB_CARD:
    'Te vamos a avisar cuando la\ntarjeta esté aprobada',
  PREPAID_CARD_ASYNC_SUCCESS_BUTTON: 'Volver al inicio',
  // PREPAID CARD TRACKING
  PREPAID_CARD_TRACKING_ORDER_TITLE: '¿Dónde esta tu tarjeta?',
  PREPAID_CARD_TRACKING_ORDER_SUBTITLE: 'Hacé seguimiento\nde tu tarjeta',
  PREPAID_CARD_TRACKING_ORDER_BUTTON: 'Continuar',
  // PART OF THE SAME SENTENCE
  PREPAID_CARD_TRACKING_ORDER_CARD_ITEM:
    'Tu tarjeta Personal Pay está en camino.',
  PREPAID_CARD_TRACKING_ORDER_ITEM:
    'Podés ver dónde está tu envío con el número de seguimiento que te enviamos por mail.',
  // PREPAID CARD PHYSICAL CREATE PIN
  CREATE_PIN_CASHIER_TITLE: 'Creá tu pin',
  CREATE_PIN_CASHIER_SUBTITLE: 'Creá tu pin de\ncuatro dígitos para el cajero',
  CREATE_PIN_CASHIER_BUTTON: 'Crear pin',
  // PART OF THE SAME SENTENCE
  CREATE_PIN_CASHIER_TEXT_ONE: 'Con tu pin vas a poder extraer ',
  CREATE_PIN_CASHIER_TEXT_TWO: 'extraer\ndinero en cajeros automáticos\n',
  CREATE_PIN_CASHIER_TEXT_THREE: 'cercanos a vos.',
  // CREATE CASHIER PIN SUCCESS
  CREATE_PIN_CASHIER_SUCCESS_SUBTITLE: '¡Listo!\nCreaste tu pin con éxito',
  CREATE_PIN_CASHIER_SUCCESS_VIEWCARD_BUTTON: 'Ir a mi tarjeta',
  CREATE_PIN_CASHIER_SUCCESS_VIEWCASHIER_BUTTON: 'Ver cajeros cercanos',
  // PART OF THE SAME SENTENCE
  CREATE_PIN_CASHIER_SUCCESS_CASHOUT_ITEM:
    'Usalo para retirar dinero, en cualquier cajero automático cercano.',
  CREATE_PIN_CASHIER_SUCCESS_CHANGE_ITEM:
    'Vas a poder cambiar tu Pin cuando lo necesites!',
  CREATE_PIN_CASHIER_SUCCESS__ITEM: 'cercanos a vos.',
  // PREPAID CARD INSERT UPDATE PIN
  UPDATE_PIN_ATM_INIT_TITLE: 'Cambiar Pin',
  UPDATE_PIN_ATM_INIT_SUBTITLE: 'Cambiá tu Pin\npara usar en cajeros',
  UPDATE_PIN_ATM_INIT_BUTTON: 'Continuar',
  // PART OF THE SAME SENTENCE
  INSERT_UPDATE_PIN_ATM_FOROT_TEXT:
    'Si te olvidaste el pin, o querés cambiarlo por seguridad.',
  INSERT_UPDATE_PIN_ATM_CHANGE_TEXT: 'Podés elegir otro Pin para poder ',
  INSERT_UPDATE_PIN_ATM_CASHOUT_TEXT: 'extraer dinero en cajeros automáticos ',
  INSERT_UPDATE_PIN_ATM_NEAR_TEXT: 'cercanos a vos.',
  // PREPAID CARD PHYSICAL INSERT CHANGE PIN
  INSERT_UPDATE_PIN_ATM_TITLE: 'Ingresá cuatro digitos',
  INSERT_UPDATE_PIN_ATM_BUTTON: 'Crear nuevo pin',

  // PREPAID CARD PHYSICAL INSERT CASHIER PIN
  INSERT_CASHIER_PIN_TITLE: 'Ingresá cuatro digitos',
  INSERT_CASHIER_PIN_ALERT_DESCRIPTION:
    'No uses datos personales, como\nfecha de nacimiento, Dni o\ndirecciones. Tampoco números\nconsecutivos.',
  INSERT_CASHIER_PIN_SHOW_TEXT: 'Mostrar Pin',
  INSERT_CASHIER_PIN_HIDE_TEXT: 'Esconder Pin',
  INSERT_CASHIER_PIN_PREVIUSPIN_ERROR_MSG: 'No podés usar un Pin anterior',
  INSERT_CASHIER_PIN_CONSECUTIVES_ERROR_MSG:
    'No podés usar números consecutivos',
  INSERT_CASHIER_PIN_REPEAT_ERROR_MSG: 'No podés usar números iguales',
  INSERT_CASHIER_PIN_SNACKBAR_MSG: 'Listo ya podés crear tu Pin',
  INSERT_CASHIER_PIN_BUTTON: 'Crear nuevo Pin',
  // UPDATE PIN ATM SUCCESS
  UPDATE_PIN_ATM_SUCCESS_SUBTITLE: '¡Listo!\nCambiaste tu pin con éxito',
  UPDATE_PIN_ATM_SUCCESS_VIEWCARD_BUTTON: 'Quiero ver mi tarjeta',
  UPDATE_PIN_ATM_SUCCESS_VIEWATM_BUTTON: 'Ver cajeros cercanos',
  // PART OF THE SAME SENTENCE
  UPDATE_PIN_ATM_SUCCESS_CASHOUT_ITEM:
    'Usalo para retirar dinero, en cualquier cajero automático cercano.',
  UPDATE_PIN_ATM_SUCCESS_CHANGE_ITEM:
    'Recordá que podes volver a cambiarlo cuando lo necesites.',
  // UPDATE PIN ATM WARNING
  UPDATE_PIN_ATM_WARNING_SUBTITLE: 'Aún no podés\ncambiar tu pin',
  UPDATE_PIN_ATM_WARNING_BUTTON: 'Volver',
  // PART OF THE SAME SENTENCE
  UPDATE_PIN_ATM_WARNING_ITEM:
    'Podés cambiar tu pin transcurridas las 24 hs, desde tu último cambio.',

  //LIMIT MANAGMENT INIT
  LIMIT_MANAGMENT_INIT_TITLE: 'Gestioná los límites',
  LIMIT_MANAGMENT_INIT_SUBTITLE:
    'Tené el control de gastos de tus\ntarjetas adicionales.',
  LIMIT_MANAGMENT_SUCCESS_TITLE: '¡Listo!\nEstableciste el límite',
  LIMIT_MANAGMENT_SUCCESS_SUBTITLE:
    'Recodá que podes modificarlo cuando quieras.',
  LIMIT_MANAGMENT_SUCCESS_BUTTON: 'Ir a mis adicionales',
  LIMIT_MANAGMENT_MODIFIED_SUCCESS_TITLE: '¡Listo!\nModificaste el límite',
  LIMIT_MANAGMENT_MODIFIED_SUCCESS_SUBTITLE:
    'Recodá que podes modificarlo cuando quieras.',
  LIMIT_MANAGMENT_MODIFIED_SUCCESS_BUTTON: 'Ir a mis adicionales',

  //PART OF THEFT OR LOSS
  REPORT_OF_THEFT_OR_LOSS_TITLE: 'Reportar por robo o extravío',
  REPORT_OF_THEFT_OR_LOSS_SUBTITLE: '¿Qué sucedío?',
  REPORT_OF_THEFT_OR_LOSS_TITLE_CONFIRM: 'Bloquear tarjeta',
  REPORT_OF_THEFT_OR_LOSS_SUBTITLE_CONFIRM:
    'Si reportas\ntu tarjeta prepaga...',
  REPORT_OF_THEFT_OR_LOSS_SUBTITLE_SUCCESS: 'Reportaste\ntu tarjeta física',
  REPORT_OF_THEFT_OR_LOSS_BUTTON_SUCCESS: 'Solicitar reimpresión de tarjeta',
  REPORT_OF_THEFT_OR_LOSS_ITEM_UNABLE: 'La tarjeta quedó inhabilitada.',
  REPORT_OF_THEFT_OR_LOSS_RADIOBUTTON_DATA: 'Alguien esta utilizando mis datos',
  REPORT_OF_THEFT_OR_LOSS_RADIOBUTTON_LOSS: 'Me la robaron o la perdí',
  REPORT_OF_THEFT_OR_LOSS_RADIOBUTTON_MOTIVE: 'Otro motivo',
  REPORT_OF_THEFT_OR_LOSS_BUTTON: 'Reimprimir mi tarjeta',
  REPORT_OF_THEFT_OR_LOSS_SECOND_ITEM:
    'Podrás solicitar una nueva tarjeta cuando quieras.',
  REPORT_OF_THEFT_OR_LOSS_FIRST_ITEMS:
    'Quedará inhabilitada y no vas a poder utilizarla',
  REPORT_OF_THEFT_OR_LOSS_THIRD_ITEMS:
    'Recordá que la reposición de la tarjeta tiene un costo de',
  REPORT_OF_THEFT_OR_LOSS_AMOUNT: ' $ 900.',
  //PREPAID CARD REPRINT SUCCESS
  PHYSICAL_CARD_REPRINT_SUCCESS_TITLE:
    'La reimpresión de tu tarjeta\nfue solicitada con éxito',
  PHYSICAL_CARD_REPRINT_SUCCESS_ITEM_SOON:
    'Pronto vas a recibir la nueva tarjeta.',
  PHYSICAL_CARD_REPRINT_SUCCESS_ITEM_NOTIFY:
    'Te vamos a avisar cuando tu tarjeta  esté en camino.',
  PHYSICAL_CARD_REPRINT_SUCCESS_BUTTON: 'Volver a mi tarjeta',

  // PREPAID CARD ADDITIONAL INIT
  PREPAID_CARD_ADDITIONAL_TITLE: 'Validación de datos personales',
  PREPAID_CARD_ADDITIONAL_INIT_TITLE: 'Solicitá una tarjeta\nadicional ',
  PREPAID_CARD_ADDITIONAL_INIT_URL_TYC:
    'https://www.personalpay.com.ar/terminos-y-condiciones/tyc_837553615',
  PREPAID_CARD_ADDITIONAL_INIT_ITEM_1: 'La persona tiene que tener\nde ',
  PREPAID_CARD_ADDITIONAL_INIT_ITEM_1_2: '13 hasta 17 años inclusive.',
  PREPAID_CARD_ADDITIONAL_INIT_ITEM_2:
    'La tarjeta debe ser recibida\npor la persona titular.',
  PREPAID_CARD_ADDITIONAL_INIT_ITEM_3:
    'El adicional consumirá saldo\nde la cuenta principal.',
  PREPAID_CARD_ADDITIONAL_INIT_BUTTON_PRIMARY: 'Solicitar adicional',
  PREPAID_CARD_ADDITIONAL_INIT_BUTTON_SECONDARY: 'Ver términos y condiciones',
  PREPAID_CARD_ADDITIONAL_PERSONAL_DATA_TITLE:
    'Ingresá los datos\nde tu adicional',
  PREPAID_CARD_ADDITIONAL_PERSONAL_DATA_SUBTITLE:
    'Los necesitamos para\nvalidar la cuenta y operar',
  PREPAID_CARD_ADDITIONAL_PERSONAL_TEXT_NAME: 'Nombre',
  PREPAID_CARD_ADDITIONAL_PERSONAL_TEXT_SURNAME: 'Apellido',
  PREPAID_CARD_ADDITIONAL_PERSONAL_LABEL_GENDER: 'Género',
  PREPAID_CARD_ADDITIONAL_PERSONAL_TEXT_GENDER: 'Género (del DNI)',
  PREPAID_CARD_ADDITIONAL_PERSONAL_TEXT_NUMDOC: 'Número de documento',
  PREPAID_CARD_ADDITIONAL_PERSONAL_TEXT_CUIL: 'Cuil',
  PREPAID_CARD_ADDITIONAL_PERSONAL_BUTTON: 'Continuar',
  PREPAID_CARD_ADDITIONAL_RESUME_DATA: 'Datos del adicional',
  PREPAID_CARD_ADDITINAL_DESCRIPTION:
    'Completá ingresando los últimos 4\ndígitos de tu tarjeta adicional\nPersonal Pay.',
  PREPAID_CARD_ADDITINAL_ACTIVATE_TITLE: 'Activá tu tarjeta adicional',
  PREPAID_CARD_ADDITINAL_ACTIVATE_CARD_BUTTON: 'Activar tarjeta adicional',
  PREPAID_CARD_ADDITINAL_ACTIVATE_TITLE_SUCCESS:
    '¡Ya podés utilizar\nla tarjeta adicional!',
  PREPAID_CARD_ADDITINAL_EMPTY_TITLE: 'Acá veras\ntus tarjetas Adicionales',
  PREPAID_CARD_ADDITIONAL_SUBTITLE_PHONE:
    'Los necesitamos para validar la cuenta y operar.',

  // COMPONENTS PREPAID
  PREPAID_CARD_GENERIC_LOCKED_NOT_AVAILABLE: 'Tarjeta no disponible',
  PREPAID_CARD_MODAL_TITLE: 'Mi tarjeta adicional',
  PREPAID_CARD_MODAL_MSG_SNACKBAR: 'Se copió correctamente',
  PREPAID_CARD_CONFIRMATION_CARD_TITLE: 'Solicitar tarjeta prepaga',
  PREPAID_CARD_CONFIRMATION_CARD_WANT: '¡Quiero mi tarjeta!',
  PREPAID_CARD_CONFIRMATION_CARD_ACTIVATE:
    'Activala y empezá a disfrutar todos los beneficios de tener tu ',
  PREPAID_CARD_CONFIRMATION_CARD_PEPA: 'tarjeta prepaga Personal Pay',

  //PREPAID CARD ALERT
  PREPAID_CARD_ALERT_TITLE_ROAD: 'Tu tarjeta está en camino',
  PREPAID_CARD_ALERT_DESC_ROAD:
    'Ya podés hacer el seguimiento\ndesde esta sección',
  PREPAID_CARD_ADDITIONAL_ALERT_DESC_ROAD:
    'Tu nueva tarjeta está en camino,\nactivala cuando llegue.',
  PREPAID_CARD_ALERT_TITLE_PAUSED: 'Pausaste tu tarjeta',
  PREPAID_CARD_ALERT_DESC_PAUSED:
    'Mientras tu tarjeta esté pausada\nno podrás realizar compras.',
  PREPAID_CARD_REQUESTED_TITLE_LOCKED: 'Tu tarjeta se está reimprimiendo',
  PREPAID_CARD_REQUESTED_DESC_LOCKED:
    'Ya podes hacer el seguimiento\ndesde esta sección',
  ACTIVATE_ADDITIONAL_CARD_BUTTON: 'Activar tarjeta adicional',
  ADDITIONAL_CARD_HOME_OPTIONS_UNSUBSCRIBE: 'Dar de baja tarjeta adicional',
  BALANCE_CORPORATE_OPTTIONS_PAYMENT_METHOD: 'Pagar con cuenta de beneficios',

  // PREPAID CARD STEPS CARD TRACKING
  PREPAID_CARD_STEPS_CARD_TRACKING_TITLE: 'Tu tarjeta está en camino',
  PREPAID_CARD_STEPS_CARD_TRACKING_TITLE_SUCCESS: 'Entregamos tu tarjeta',
  PREPAID_CARD_STEPS_CARD_TRACKING_TITLE_FAILURE:
    'No te encontramos\nen tu domicilio',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_FAILURE:
    'Revisá tu mail para las indicaciones \nde retiro.',
  PREPAID_CARD_STEPS_CARD_TRACKING_INIT: '¿Donde está tu tarjeta?',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_REQUEST:
    'Pediste tu tarjeta Personal Pay',
  PREPAID_CARD_STEPS_CARD_TRACKING_DELIVERED_TEXT_1:
    'Cargala ingresando dinero en tu\n',
  PREPAID_CARD_STEPS_CARD_TRACKING_DELIVERED_TEXT_2: 'cuenta Personal Pay',
  PREPAID_CARD_STEPS_CARD_TRACKING_DELIVERED_TEXT_3: 'Utilizala en',
  PREPAID_CARD_STEPS_CARD_TRACKING_DELIVERED_TEXT_4: ' cualquier lugar donde',
  PREPAID_CARD_STEPS_CARD_TRACKING_DELIVERED_TEXT_5:
    'acepten visa. ¡Es internacional!',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_PREPARING:
    'Estamos preparando el envío.',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_ROAD: 'Tu tarjeta está en camino',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_RAOD_READY: 'Ya iniciamos el envío.',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_SHIPPING: 'La recibirás muy pronto.',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_DELIVER: '¡Entregamos tu tarjeta!',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_UNDELIVERED:
    'No pudimos entregar tu tarjeta',
  PREPAID_CARD_STEPS_CARD_TRACKING_SECOND_ITEM_VISIT:
    'Te avisaremos cuando te visitemos\nnuevamente en tu domicilio.',
  PREPAID_CARD_STEPS_CARD_TRACKING_SECOND_ITEM_UNDELIVERED:
    'Revisá tu mail para las indicaciones\nde retiro.',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_ACTIVATE:
    '¡Que la disfrutes! Recordá activarla\npara empezar a usarla.',
  PREPAID_CARD_STEPS_CARD_TRACKING_TITLE_DELIVERED_SUCURSAL:
    'Entregamos tu tarjeta en sucursal',
  PREPAID_CARD_STEPS_CARD_TRACKING_ITEM_DELIVERED_SUCURSAL:
    '¡Que la disfrutes! Recordá activarla\npara empezar a usarla. ',
  PREPAID_CARD_STEPS_CARD_TRACKING_LINK_TRACKING: 'Ver más información',

  PREPAID_CARD_STEPS_CARD_TRACKING_UNDELIVERED_TEXT_1:
    'Tenés 60 días para retirar tu tarjeta\nen la sucursal Andreani',
  PREPAID_CARD_STEPS_CARD_TRACKING_UNDELIVERED_TEXT_2:
    'Pasado los 60 días, la tarjeta quedará\ninhabilitada. ',
  PREPAID_CARD_STEPS_CARD_TRACKING_UNDELIVERED_TEXT_3:
    'Recordá que solo la puede retirar\nel titular con su ',
  PREPAID_CARD_STEPS_CARD_TRACKING_UNDELIVERED_TEXT_4: 'DNI.',
  // PREPAID CARD DISABLED CARD MESSAGE
  PREPAID_CARD_DISABLED_CARD_MESSAGE_TITLE:
    'No retiraste tu tarjeta\nen sucursal',
  PREPAID_CARD_DISABLED_CARD_MESSAGE_ITEM_SECURITY:
    'Para tu seguridad, la misma quedó\ninhabilitada.',
  PREPAID_CARD_DISABLED_CARD_MESSAGE_ITEM_REQUEST:
    'Podes seguir utilizando tu tarjeta virtual.',
  PREPAID_CARD_DISABLED_CARD_MESSAGE_ITEM_REMEMBER:
    'Recordá que aplican costos por\nreimpresión.',

  // PREPAID - MY SAVINGS
  PREPAID_MY_SAVINGS: 'https://www.personalpay.com.ar/blog',

  // PREPAID CARD HORIZONTAL
  PREPAID_CARD_SECURITY: '**** **** ****',

  // PREPAID CARD FAILURE
  PREPAID_CARD_FAILURE_TEXT: 'Intentarlo nuevamente\nen otro momento',
  PREPAID_CARD_FAILURE_SECONDARY_TEXT: 'Volver a adicionales',
  PREPAID_CARD_FAILURE_TITLE: 'Tu solicitud de tarjeta\nfue rechazada',

  // PREPAID CARD FAILURE DNI
  PREPAID_CARD_FAILURE_TEXT_DNI:
    'Verifica que los datos ingresados\nsean correctos.',
  PREPAID_CARD_FAILURE_SECONDARY_TEXT_DNI: 'Ir a mis tarjetas',
  PREPAID_CARD_FAILURE_TITLE_DNI: 'Tu solicitud de tarjeta\nfue rechazada',

  // PREPAID CARD SUCCESS
  PREPAID_CARD_SUCCESS_TEXT: 'Te vamos a avisar cuando\nesté aprobada.',
  PREPAID_CARD_SUCCESS_TITLE: '¡Listo!\nTu solicitud está en proceso',

  // PREPAID CARD NEARBY ATM
  WITHDRAW_NEARBY_ATM_HEADER_TITLE: 'Extacción de dinero',
  WITHDRAW_NEARBY_ATM_SUBTITLE: 'Sacá efectivo\ncuando lo necesites',
  WITHDRAW_NEARBY_ATM__ITEM:
    'Podés sacar efectivo con tu tarjeta Personal Pay en cualquier cajero automático.',
  WITHDRAW_NEARBY_ATM_FEES__ITEM:
    'Recordá que las extracciones tienen un cargo extra.',
  WITHDRAW_VIEW_NEARBY_ATM_BUTTON: 'Ver cajeros cercanos',

  // PREPAID CARD ADDITIONAL CARD DATE ROUTE

  ENTER_DATE: 'Ingresá la fecha de nacimiento\n del adicional',
  VALIDATE: 'Necesitamos estos datos\n para validar la cuenta y operar',
  DATE: 'Fecha de nacimiento',
  DATE_FORMAT: 'dd/mm/aaaa',
  CONTINUE: 'Continuar',

  // TRANSFER MONEY
  TRANSFER_MONEY_SCAN_QR_HINT: 'Pedí que lean tu QR\n con la app de ',
  TRANSFER_MONEY_SCAN_QR: 'Escanear QR',
  TRANSFER_MONEY_MY_QR: 'Mi QR',
  TRANSFER_MONEY_SCAN_QR_NOT_FOUND: 'No encontramos este QR',
  TRANSFER_MONEY_SCAN_QR_NOT_FOUND_DESCRIPTION:
    'Puede ser que este usuario todavia no esté en Personal Pay.',
  TRANSFER_MONEY_SCAN_QR_FAILURE_MAIN_ACTION: 'Escanear de nuevo',
  TRANSFER_MONEY_SCAN_QR_FAILURE_SECONDARY_ACTION: 'Ir al inicio',
  TRANSFER_MONEY_CANNOT_SCAN_QR: 'No pudimos leer este QR',
  TRANSFER_MONEY_CANNOT_SCAN_QR_DESCRIPTION: 'Revisá estos tips:',
  TRANSFER_MONEY_CANNOT_SCAN_QR_TIP_ONE:
    'Que el teléfono que escaneás\ntenga el brillo alto.',
  TRANSFER_MONEY_CANNOT_SCAN_QR_TIP_TWO:
    'Que tu teléfono sea compatible\npara leer QR.',
  TRANSFER_MONEY_CANNOT_SCAN_QR_TIP_THREE:
    'Que la pantalla del teléfono que\nescaneás no esté dañada.',
  TRANSFER_MONEY_SCAN_QR_TOOLTIP:
    'Desde acá podés hacer\ntransferencias con QR',
  TRANSFER_MONEY_QR_EDIT_BUTTON_TEX: 'Personalizar QR',
  TRANSFER_MONEY_SHOW_QR_FAILURE_TITLE: 'No pudimos mostrar tu QR',
  TRANSFER_MONEY_SHOW_QR_FAILURE_DESCRIPTION:
    'Para recibir dinero también podés compartir tu CVU o Alias.',
  TRANSFER_MONEY_SHOW_QR_FAILURE_BTN_PRIMARY: 'Ver datos de mi cuenta',
  TRANSFER_MONEY_SHOW_QR_FAILURE_BTN_SECONDARY: 'Ir al inicio',

  TRANSFER_MONEY_CONFIG_QR_CHOOSE_COLOR: 'Seleccioná el color',
  TRANSFER_MONEY_CONFIG_QR_CHOOSE_ICON: 'Seleccioná la imagen',
  TRANSFER_MONEY_CONFIG_QR_CONFIRM: 'Confirmar',

  TRANSFER_MONEY_SHOW_QR_FAILURE_ALERT_TEXT:
    'No pudimos mostrar tus datos. Intentá en otro momento',
  TRANSFER_MONEY_SHOW_QR_FAILURE_ALERT_BUTTON: 'Continuar',

  TRANSFER_MONEY_UPDATE_QR_FAILURE_TITLE:
    'No pudimos personalizar tu QR. Intentá en otro momento',

  // PREPAID CARD INIT
  PREPAID_CARD_INIT_TITLE: 'Solicitud de tarjeta',
  PREPAID_CARD_INIT_SUBTITLE: '¿Qué tarjeta querés\nsolicitar?',
  PREPAID_CARD_INIT_TITLE_CARD1: 'Tarjeta virtual',
  PREPAID_CARD_INIT_CARD_TEXT_SUBSCRIBE: 'Subscribite ',
  PREPAID_CARD_INIT_CARD_TEXT_SERVICE: 'a tus servicios y realiza ',
  PREPAID_CARD_INIT_CARD_TEXT_BUY: 'compras',
  PREPAID_CARD_INIT_CARD_TEXT_ONLINE: 'de manera online.',
  PREPAID_CARD_INIT_CARD_TEXT_FREE: 'Gratis y sin costo de mantenimiento.',
  PREPAID_CARD_INIT_TITLE_CARD2: 'Tarjeta virtual y física',
  PREPAID_CARD_INIT_ITEM_DOING: 'Usala para hacer ',
  PREPAID_CARD_INIT_ITEM_BUY_ONLINE: 'compras online y presenciales ',
  PREPAID_CARD_INIT_ITEM_WITH_VISA: 'en los lugares que\nacepten visa.',
  PREPAID_CARD_INIT_SECOND_ITEM_SUSBSCRIBE: 'Subscribite a tus ',
  PREPAID_CARD_INIT_SECOND_ITEM_SERVICE_FAVORITE: 'servicios favoritos',
  PREPAID_CARD_INIT_SECOND_ITEM_ITS_FREE: '¡Es gratis! ',
  PREPAID_CARD_INIT_SECOND_ITEM_ITSN_MANTEIN: 'sin costo de mantenimiento',
  PREPAID_CARD_INIT_SECOND_ITEM_CAHSOUT_CASH: 'Retirá efectivo en cajeros.',
  PREPAID_CARD_INIT_ACCEPT_TYC_TEXT: 'Acepto los ',
  PREPAID_CARD_INIT_TYC_TEXT: 'términos y condiciones',

  // TRANSACTION DETAILS
  CREDIT_PHONE_RECHARGE: 'por recargas',
  CREDIT_SERVICE_PAYMENT: 'por pago de servicios',
  CREDIT_CARD_PAYMENT: 'por pago con tarjeta',

  CREDIT_PHONE_RECHARGE_DETAIL: 'Recarga',
  CREDIT_SERVICE_PAYMENT_DETAIL: 'Pago de servicio',
  CREDIT_CARD_PAYMENT_DETAIL: 'Pago con tarjeta',

  // SHIPPING ADDRESS
  PREPAID_CARD_SHIPPING_ADDRESS_TITLE: 'Cada vez falta menos',
  PREPAID_CARD_SHIPPING_ADDRESS_SECOND_TITLE:
    '¡Te llevamos la tarjeta\ngratis a donde estés!',
  PREPAID_CARD_SHIPPING_ADDRESS_SUBTITLE: `¡Te llevamos la tarjeta\n gratis a donde estés!`,
  PREPAID_CARD_SHIPPING_ADDRESS_BUTTON: 'Continuar',
  PREPAID_CARD_SHIPPING_ADDRESS_INSERT_LABEL:
    'Ingresá la dirección de envío donde querés recibir tu tarjeta.',
  PREPAID_CARD_SHIPPING_ADDRESS_INSERT_TIME:
    'El tiempo de entrega de la tarjeta\nes de 7 a 12 días hábiles.',
  // PREPAID CARD VALIDATION
  PREPAID_CARD_VALIDATION_BUTTON: 'Continuar validación',
  PREPAID_CARD_VALIDATION_BUY_TEXT:
    'Muy pronto vas a poder solicitar tu tarjeta virtual visa internacional.',
  PREPAID_CARD_VALIDATION_DATA_TEXT:
    'Vas a poder comprar online y suscribirte a tus servicios favoritos.',
  PREPAID_CARD_VALIDATION_ICON_TEXT:
    'Pero primero necesitás terminar la validación de datos personales',
  // ACTIVATE PHYSICAL CARD SUCCESS
  ACTIVATE_PHYSICAL_CARD_SUCCESS_SUBTITLE:
    '¡Tu tarjeta física\nfue activada con éxito!',
  ACTIVATE_PHYSICAL_CARD_SUCCESS_CHARGE: 'Cargala ingresando dinero en tu ',
  ACTIVATE_PHYSICAL_CARD_SUCCESS_ACCOUNT: 'cuenta Personal Pay.',
  ACTIVATE_PHYSICAL_CARD_SUCCESS_BUY: 'Comprá con los mejores beneficios en ',
  ACTIVATE_PHYSICAL_CARD_SUCCESS_INTERNATIONAL:
    'cualquier lugar donde acepten visa. ¡Es internacional!',
  ACTIVATE_PHYSICAL_CARD_SUCCESS_AWARD:
    'Recordá que para tu primera compra\ntenés un premio.',
  ACTIVATE_PHYSICAL_CARD_SUCCESS_BUTTON: 'Quiero ver mi tarjeta',
  //ACTIVATED PHYSICAL CARD
  ACTIVATED_PHYSICAL_CARD_SUB_TITLE:
    'Ya podés usar todos los beneficios que tiene Personal Pay para vos.',
  ACTIVATED_PHYSICAL_CARD_BUTTOM: 'Ir a mis tarjetas',
  ACTIVATED_PHYSICAL_CARD_TITLE: 'Tu tarjeta ya está activa',
  // SEE CARD DATA
  PREPAID_CARD_DATA_TITLE: 'Mi tarjeta virtual*',
  PREPAID_PHYSICAL_CARD_DATA_TITLE: 'Mi tarjeta prepaga',
  PREPAID_CARD_ONLY_ONLINE: 'Uso limitado para realizar compras online',
  PREPAID_CARD_DATA_TIMER_TEXT: 'Datos visibles por :',
  // UNSUBSCRIBE PREPAID CARD SUCCESS
  UNSUBSCRIBE_PREPAID_CARD_SUCCESS_TITLE: 'Dar de baja',
  UNSUBSCRIBE_PREPAID_CARD_SUCCESS_SUBTITLE:
    'Diste de baja\ntu tarjeta virtual',
  UNSUBSCRIBE_PREPAID_CARD_SUCCESS_TEXT:
    'Recordá que podés solicitar una nueva cuando quieras en la sección mi tarjeta.',
  UNSUBSCRIBE_PREPAID_CARD_SUCCESS_BUTTON: 'Ir al inicio',
  // UNSUBSCRIBE PHYSICAL CARD
  UNSUBSCRIBE_PHYSICAL_CARD_TITLE: 'Dar de baja',
  UNSUBSCRIBE_PHYSICAL_CARD_SUBTITLE: 'Si dás de baja\ntu tarjeta prepaga',
  UNSUBSCRIBE_PHYSICAL_CARD_TEXT_1:
    'Quedará inhabilitada y no vas a poder utilizarla.',
  UNSUBSCRIBE_PHYSICAL_CARD_TEXT_2:
    'Podés solicitar una nueva tarjeta  cuando quieras.',
  UNSUBSCRIBE_PHYSICAL_CARD_PRIMARY_BUTTON: 'Volver',
  UNSUBSCRIBE_PHYSICAL_CARD_SECONDARY_BUTTON: 'Si, dar de baja la tarjeta',

  // UNSUSCRIBE PHYSICAL CARD SUCCESS
  UNSUSCRIBE_PHYSICAL_CARD_SUCCESS_TITLE: 'Diste de baja\ntu tarjeta prepaga',
  UNSUSCRIBE_PHYSICAL_CARD_SUCCESS_BUTTON: 'Ir al inicio',
  UNSUSCRIBE_PHYSICAL_CARD_SUCCESS_ITEM__0:
    'Recordá que podés solicitar una nueva cuando quieras en la sección mi tarjeta.',
  UNSUSCRIBE_PHYSICAL_CARD_SUCCESS_ITEM__1:
    'Primero tendrás que solicitar tu tarjeta virtual.',
  // UNSUSCRIBE PHYSICAL CARD ERROR
  UNSUSCRIBE_PHYSICAL_CARD_ERROR_TITLE: 'Algo salió mal',
  UNSUSCRIBE_PHYSICAL_CARD_ERROR_BUTTON: 'Volver a intentar',
  UNSUSCRIBE_PHYSICAL_CARD_ERROR_DESCRIPTION:
    'No pudimos dar de baja tu tarjeta\nprepaga. Por favor intentá nuevamente.',

  // CONNECTION ERRORS
  CONNECTION_ERROR:
    'No podemos mostrarte esta\ninformación ahora. Intenta en\notro momento.',
  CONNECTION_ERROR_BUTTON: 'Volver al inicio',

  // OCCUPATION TEXTS
  OCCUPATION_OPTIONS_TITLE: 'Actualmente trabajo',

  // NO INTERNET CONNECTION
  NO_INTERNET_CONNECTION_TITLE: 'Sin conexión a internet',
  NO_INTERNET_CONNECTION_MESSAGE:
    'Verificá tu conexión y volvé a intentar nuevamente',
  NO_INTERNET_BUTTON_LABEL: 'Volver a intentar',
  NO_INTERNET_TEXT_MESSAGE: 'No hay conexión a internet',

  // MY BUSINESS TEXTS
  MY_BUSINESS_HOME_SERVICE_CARDS_TITLE: 'Accesos directos',
  MY_BUSINESS_COMMING_SERVICE: 'Muy pronto\nalgo nuevo',
  MY_BUSINESS_FAQS_URL:
    'https://www.personalpay.com.ar/preguntas-frecuentes/venta-recargas',
  MY_BUSINESS: 'Mi negocio',
  MY_BUSINESS_HELP: ` Ayuda`,
  CHARGE_WITH_QR: 'Cobrar\ncon QR',
  TOTAL_SALES: 'Total de mis ventas',
  SELL_REFILLS: 'Vender\nrecargas',
  SEND_PAYMENT_LINK: 'Cobrar\ncon link',
  MY_BUSINESS_COMMING_TITLE: 'Próximamente',
  TEMPORAL_DESCRIPTION_MY_BUSINESS_HOME:
    'Cobrá, gestioná tus ventas y tené a mano los reportes de tu negocio.',
  MY_BUSINESS_ONBOARDING_FIRST_SLIDE_TITLE: `¡Vendele recargas de celular a quien quieras!`,
  MY_BUSINESS_DISCCOUNT_AMOUNT: '2.1%',
  MY_BUSINESS_COMMISSION: 'comisión',
  MY_BUSINESS_ONBOARDING_SECOND_SLIDE_TITLE: `Ganá una comisión por\ncada recarga`,
  MY_BUSINESS_ONBOARDING_CONTINUE: 'Empezar',
  MY_BUSINESS_ONBOARDING_EXTRAPAY_AMOUNT: '$500',
  MY_BUSINESS_ONBOARDING_PARCIAL_ITEM_TEXT: `Recibís el `,
  MY_BUSINESS_ONBOARDING_COMMISSION_AMOUNT: '2.1%',
  MY_BUSINESS_ONBOARDING_PERSONAL_PROMO_AMOUNT: '30%',
  MY_BUSINESS_ONBOARDING_PERSONAL_EXTRA: 'extra',
  MY_BUSINESS_ONBOARDING_WELCOME_RECEIVE: `Recibís un saldo de bienvenida de `,
  MY_BUSINESS_ONBOARDING_WELCOME_GIFT_AMOUNT: '$5000',
  MY_BUSINESS_ONBOARDING_SELLING_RECHARGES:
    ' para vender tus primeras recargas.',
  MY_BUSINESS_ONBOARDING_FIRST_ITEM:
    'No necesitás ningún aparato adicional, con tu celular y el saldo de tu cuenta, ya podés vender.',
  MY_BUSINESS_ONBOARDING_IF_IS_PERSONAL:
    'Si recargás una línea Personal, tu cliente recibe un ',
  MY_BUSINESS_ONBOARDING_FOR_EACH: `por cada `,
  MY_BUSINESS_ONBOARDING_ANY_RECHARGE: `recarga que vendas.`,
  MY_BUSINESS_ONBOARDING_RECHARGE_TITLE: '¡Empezá a vender recargas!',
  MY_BUSINESS_ONBOARDING_ITEM_1:
    'Lo hacés en pocos segundos utilizando tu saldo en Personal Pay',
  MY_BUSINESS_ONBOARDING_ITEM_2: 'Si la recarga es de Personal, tiene un',
  MY_BUSINESS_ONBOARDING_COMMISSION_TEXT: `de comisión `,
  MY_BUSINESS_ONBOARDING_ITEM_3: 'No tenés ningún límite de recargas',
  MY_BUSINESS_ONBOARDING_ITEM_REPORTS: `Al final de cada mes, recibís el resumen de comisiones para facturarlo y lo acreditamos en tu cuenta.`,
  MY_BUSINESS_TOTAL_AMOUNT: 'Total a pagar',
  MY_BUSINESS_BALANCE_WITH: 'Saldo con',
  MY_BUSINESS_PAYMENT_METHOD: 'Método de pago',
  MY_BUSINESS_DOWNLOAD_REPORT_GENERATE: 'Reportes generados',
  MY_BUSINESS_DOWNLOAD: 'Descargar',
  MY_BUSINESS_SHARE: 'Compartir',
  MY_BUSINESS_REPORTS_SALES: 'Reporte de ventas',
  MY_BUSINESS_REPORTS_DETAIL: 'Detalle del reporte',
  MY_BUSINESS_DOWNLOAD_REPORT_GENERATE_CONTENT:
    'Seleccioná el tipo de cobro o venta para ver los reportes.',
  MY_BUSINESS_DOWNLOAD_REPORT_SUBTITLE: 'Todavía no hay reportes',
  MY_BUSINESS_DOWNLOAD_REPORT_CONTENT:
    'Los reportes de ventas se generan automáticamente por mes. Una vez generados, podrás consultarlos y descargarlos desde acá.',
  MY_BUSINESS_DOWNLOAD_REPORT_FAQ_PART_1: 'Conocé',
  MY_BUSINESS_DOWNLOAD_REPORT_FAQ_PART_2: 'qué son y para qué sirven',
  MY_BUSINESS_DOWNLOAD_REPORT_FAQ_PART_3: 'los reportes de ventas.',
  MY_BUSINESS_DOWNLOAD_REPORT_ACCEPT: 'Aceptar',
  QR_PAYMENT_ONBOARDING_TITLE: '¡Empezá a cobrar con QR!',
  BEGIN: 'Empezar',
  BEGIN_QR_PAYMENT: 'Generar QR',
  READY_MAYUS: 'LISTO',
  NOT_SELL_HISTORY: 'No se registraron ventas durante este periodo.',
  NO_REPORT: 'SIN REPORTE',
  QR_PAYMENT_ONBOARDING_ITEM_1:
    'Tus clientes ahora pueden escanear el código con Personal Pay o cualquier otra billetera.',
  QR_PAYMENT_ONBOARDING_ITEM_2: 'Además, recibís la plata al instante.',
  QR_PAYMENT_ONBOARDING_ITEM_3:
    'Y lo mejor: ¡no tiene costo ni comisiones por los primeros tres meses!',
  QR_PAYMENT_BANNER_TEXT:
    'Pedile a tu cliente que lo\nescanee con Personal Pay u\notra billetera.',
  QR_PAYMENT_ENTER_AMOUNT: 'Ingresar un importe',
  QR_PAYMENT_BANNER_MORE_INFO: 'Más información',
  QR_PAYMENT_BANNER_TITLE:
    'Tu QR se puede leer con Personal Pay o alguna de estas apps:',
  QR_PAYMENT_CONFIRM_CUIL_SUBTITLE: 'Ingresá tu CUIL',
  QR_PAYMENT_CONFIRM_CUIL_TEXT:
    'Recordá que tiene que coincidir con el N de DNI con el que te registraste.',
  QR_PAYMENT_CUIL_NOT_THE_SAME: 'El CUIL no coincide con el DNI de la cuenta',
  QR_PAYMENT_MINIMUN_AMOUNT: 'Importe mínimo $10',
  QR_PAYMENT_DETAIL_MODAL_TITLE: '¿Qué vas a vender?',
  QR_PAYMENT_SET_DETAIL: 'Ingresá el detalle',
  QR_PAYMENT__DETAIL_MAX_LENGTH: '35',
  QR_PAYMENT_CHARACTERS: 'caracteres',
  QR_PAYMENT_DETAIL_MODAL_BUTTON: 'Continuar',
  QR_PAYMENT_TIP: `Entrá acá y mostrá este QR si preferís que el cliente ingrese el importe.`,
  QR_PAYMENT_SET_AMOUNT_TITLE: 'Ingresar importe', //TODO: Renombrar, ya que se usa en varios flujos no solo en QR
  QR_PAYMENT_CANCEL_PAYMENT: 'Cancelar cobro',
  QR_PAYMENT_TIMER_SECONDS_PART_1: 'Tenés ',
  QR_PAYMENT_TIMER_SECONDS_PART_2: ' para escanear',
  QR_PAYMENT_SCANNED_CODE: '¡QR escaneado!',
  QR_PAYMENT_GO_TO_MY_BUSINESS_HOME: 'Ir a Mi negocio',
  QR_PAYMENT_CANCEL_PAYMENT_TITLE: '¿Querés cancelar el cobro?',
  QR_PAYMENT_CANCEL_PAYMENT_TEXT: 'Se va a eliminar el QR que generaste.',
  QR_PAYMENT_CANCEL_PAYMENT_CONFIRM: 'Sí, cancelar',
  QR_PAYMENT_CANCEL_CONFIRMATION: 'Se canceló el cobro con QR',
  QR_PAYMENT_QR_CODE_TIME_EXPIRED: 'El tiempo de lectura del QR venció.',
  QR_PAYMENT_LOADING_TEXT: 'Estamos generando tu QR',
  QR_PAYMENT_ORIGINAL_AMOUNT: '0.00',
  QR_PAYMENT_ORIGINAL_DESCRIPTION: '¿Qué vas a vender?',
  QR_PAYMENT_ORIGINAL_CANCELLED_QR: 'cancelled',
  QR_PAYMENT_ORIGINAL_EXPIRED_QR: 'expired',
  QR_PAYMENT_CONTINUE: 'Continuar',
  RECHARGES_NOT_ENOUGH_BALANCE: 'Sin saldo suficiente',
  RECHARGES_NOT_ENOUGH_BALANCE_DESCRIPTION:
    'Para realizar esta recarga, agregá dinero a tu cuenta y volvé a intentarlo.',
  RECHARGES_NOT_ENOUGH_BALANCE_PRIMARY_BUTTON: 'Agregar dinero',
  RECHARGES_NOT_ENOUGH_BALANCE_SECONDARY_BUTTON: 'Ir a Mi negocio',
  DOWNLOAD_REPORT_ERROR_DOWNLOAD:
    'No pudimos descargar el archivo. Intentalo en unos minutos.',
  QR_ERROR_PRIMARY_BUTTON: 'Reintentar',
  QR_ERROR_SECONDARY_BUTTON: 'Ir a Mi negocio',
  QR_ERROR_SECONDARY_BUTTON_QR_KIT: 'Ir a Inicio',
  QR_ERROR_CANT_GENERATE_QR_CODE_TITLE: 'No pudimos generar tu QR',
  QR_ERROR_CANT_GENERATE_QR_CODE_DESCRIPTION: '¿Volvemos a intentarlo?',
  QR_ERROR_CANT_SHOW_QR_CODE_TITLE: 'No pudimos generar tu QR',
  QR_ERROR_CANT_SHOW_QR_CODE_DESCRIPTION: '¿Volvemos a intentarlo?',
  QR_ERROR_PAYMENT_TITLE: 'No pudimos cobrar con QR',
  QR_ERROR_PAYMENT_DESCRIPTION: 'Pedile a tu cliente que vuelva a escanearlo.',
  PHONE_RECHARGE_BANNER_DESCRIPTION_COMMISSION:
    'Recordá que deberás facturar las comisiones\npara que se acrediten en tu cuenta',
  PHONE_RECHARGE_BANNER_TITLE_COMMISSION: 'Próxima comisión a cobrar',
  QR_PRINT_CODE_BUTTON: 'Descargar QR',
  EMAIL: 'Email',
  EMAIL_ERROR_TITLE: 'No pudimos procesar tu consulta',
  SEND_QR: 'Enviar QR',
  MODAL_PRINT_QR_DESCRIPTION:
    'Descargá el código e imprimirlo para mostrarlo\nen tu negocio.',
  QR_PRINT_TOOLTIP: 'Descargá el QR para imprimirlo y mostrarlo en tu negocio.',
  ASK_FOR_VALID_MAIL: 'Ingresá un email válido',
  MY_BUSINESS_OPTIONS_TITLE: 'Opciones de mi negocio',
  MY_BUSINESS_REPORTS: `Reportes`,
  REPORT_OPTION_QR: 'QR',
  REPORT_OPTION_RECHARGES: 'Recargas',
  REPORT_OPTION_PAYMENT_LINK: 'Link de pago',
  MY_BUSINESS_REPORTS_ERROR_TITLE: 'Parece que hubo un problema',
  MY_BUSINESS_REPORTS_ERROR_DESCRIPTION:
    'En este momento no podemos mostrar la\ninformación. Intentalo nuevamente en\nunos minutos.',
  MY_BUSINESS_REPORTS_RECHARGES_DESCRIPTION:
    'En esta sección podés descargar los reportes mensuales de tus ventas.',
  MY_BUSINESS_PENDING_COMMISSION: 'Comisiones a cobrar',
  MY_BUSINESS_TOTAL_EARNINGS: 'Ganancia neta',
  MY_BUSINESS_COMMISSION_INSTRUCTION:
    'Facturá este importe y envialo por email para\nrecibirlo en tu cuenta',
  MY_BUSINESS_QUESTION_COMMISSION: '¿Cómo envío la factura?',
  MY_BUSINESS_WHAT_IS_TOTAL_EARNING: '¿Qué es la ganancia neta?',
  MY_BUSINESS_COMMISSION_DESCRIPTION:
    'Es el dinero que realmente se acreditó en\ntu cuenta, después del pago de comisión\npor el servicio y las retenciones de\nimpuestos.',
  MY_BUSINESS_QR_BLOCKED_TITLE: 'En este momento no podés cobrar con QR',
  MY_BUSINESS_QR_DAILY_BLOCKED:
    'Alcanzaste el límite diario. Volvé a cobrar con QR a partir de mañana.',
  MY_BUSINESS_QR_MONTHLY_BLOCKED:
    'Alcanzaste el límite mensual. Volvé a cobrar con QR a partir del próximo mes.',
  MY_BUSINESS_BLOCKED_BUTTON: 'Ver límites',
  ERROR_EMPTY_LIST: '¿No encontraste lo que buscabas?',
  ERROR_EMPTY_LIST_DESCRIPTION:
    'En este momento no podemos mostrar la información. Intentalo nuevamente en unos minutos',
  INFO_NOT_FOUND: '¿No encontraste lo que buscabas?',
  WHATSAPP_HELP: 'Ayuda por WhatsApp',
  ACTIVTY_DETAIL_TITLE: 'Detalles de la operación',
  DETAIL_ERROR_TITLE: 'No pudimos mostrar el detalle',
  DETAIL_ERROR_DESCRIPTION:
    'Intentalo de nuevo, por favor. Si el\nproblema persiste, te pedimos que\nvuelvas en unos minutos.',
  DETAIL_ERROR_DESCRIPTION_V3:
    'Volvé a intentarlo, por favor. Y si el problema\npersiste, te sugerimos que vuelvas en unos minutos.',
  DETAIL_ERROR_BUTTON_RETRY: 'Reintentar',
  MY_BUSINESS_REPORTS_ONBOARDING_FIRST_ITEM:
    'Mirá y descargá los reportes mensuales con el detalle de tus ventas.',
  MY_BUSINESS_REPORTS_ONBOARDING_SECOND_ITEM:
    'Conocé tu ganancia neta mensual por tus cobros con QR.',
  MY_BUSINESS_REPORTS_ONBOARDING_THIRD_ITEM:
    'Y chequeá cuánto tenés que facturar para cobrar tus comisiones.',
  MY_BUSINESS_PHONE_RECHARGE_ONBOARDING_FIRST_ITEM:
    'Sólo necesitás tu celular y saldo en tu cuenta.',
  MY_BUSINESS_PHONE_RECHARGE_ONBOARDING_SECOND_ITEM:
    'Y si vendés recargas de Personal, ¡tu cliente recibe un <b>30% extra!</b>',
  MY_BUSINESS_PHONE_RECHARGE_ONBOARDING_THIRD_ITEM:
    '¡Te damos $5.000, sin costo y por única vez, para que empieces a vender!',
  MY_BUSINESS_PHONE_RECHARGE_ONBOARDING_THIRD_ITEM_ACCESSIBILITY:
    'Te damos 5000 pesos argentinos, sin costo y por única vez para que empieces a vender!',
  MY_BUSINESS_REPORTS_ONBOARDING_TITLE:
    '¡Toda la info de tus ventas en el mismo lugar!',
  MY_BUSINESS_TERMS_ACCEPT_PART_1: 'Acepto los ',
  MY_BUSINESS_TERMS_ACCEPT_PART_2: 'Términos y Condiciones.',
  MY_BUSINESS_TERMS_ACCEPT_PART_2_ACCESSIBILITY_HINT:
    'Al tocar se desplegará un modal con el contenido de los',
  MY_BUSINESS_TYC_ACCESSIBILITY_1: 'Al activar accederá a la sección',
  MY_BUSINESS_TYC_ACCESSIBILITY_2:
    'Botón desabilitado, para habilitar el botón debe estar tildada la casilla de verificación de Términos y condiciones',
  MY_BUSINESS_TITLE_TERMS_ACCEPT: 'Términos y Condiciones',
  MY_BUSINESS_TITLE_COMITIONS_PAYMENT_LINK: 'Comisión por venta',
  MY_BUSINESS_DESCRIPTIONS_COMITIONS_PAYMENT_LINK:
    'Por cada cobro que hagas con link de pago, te cobramos una comisión del 4,39% + IVA. \n \nRecordá que además los cobros pueden estar sujetos a retenciones impositivas.',
  MY_BUSINESS_DESCRIPTIONS_COMITIONS_PAYMENT_LINK_V3:
    'Por cada cobro que hagas con link de pago, te cobramos una comisión del 4,39% + IVA. \n \nImportante: los cobros pueden estar sujetos a retenciones impositivas.',
  MY_BUSINESS_TITLE_DETAIL_PAYMENT_LINK: '¿Qué vas a vender?',
  MY_BUSINESS_TITLE_BUTTON_DETAIL_PAYMENT_LINK: 'Ver más sobre comisiones',
  MY_BUSINESS_LINK_PAYMENT_DETAIL_MAX_LENGTH: '35',
  MY_BUSINESS_LINK_PAYMENT_SET_DETAIL: 'Ingresá el detalle',
  MY_BUSINESS_LINK_PAYMENT_SET_DETAIL_V3: 'Escribí el detalle',
  MY_BUSINESS_LEGEND_INPUT_MESSAGE: 'Pagás de comisión ',
  MY_BUSINESS_LEGEND_INPUT_IVA: ' + IVA',
  MY_BUSINESS_BUTTON_CREATE_LINK: 'Crear link',
  CHARGE_WITH_QR_ACC: 'Cobrar con Q R',
  SELL_REFILLS_ACC: 'Vender recargas',
  SEND_PAYMENT_LINK_ACC: 'Cobrar con link',
  MY_BUSINESS_GO_BACK_ACCESSIBILITY: 'volver atrás',

  MY_BUSINESS_TITLE_EMPTY_PAGE_LINK: 'Todavía no creaste links',
  MY_BUSINESS_DESCRIPTION_EMPTY_PAGE_LINK:
    'Acá vas a ver los links de pago que hayas creado y el estado de tus cobros.\n \n ¿Empezamos?',
  MY_BUSINESS_NEW_LINK_PAYMENT_BUTTON: 'Crear nuevo link',
  MY_BUSINESS_BUTTON_CONTINUE: 'Continuar',
  MY_BUSINESS_LINK_PAYMENT_BUTTON: 'Crear link de pago',
  MY_BUSINESS_BUTTON_ACCEPT: 'Aceptar',
  MY_BUSINESS_CREATE_PAYMENT_BUTTON: 'Crear link',
  MY_BUSINESS_INFO_CREATE_LINK:
    'Tené en cuenta que este monto puede estar sujeto a retenciones impositivas',
  MY_BUSINESS_INFO_CREATE_LINK_V3:
    'El monto puede estar sujeto a retenciones impositivas.',
  MY_BUSINESS_RESUME_CREATE_LINK_TITLE: 'Revisá los datos del link',
  MY_BUSINESS_TYC_ERROR_DESCRIPTION:
    'No pudimos validar tus datos.\n¿Volvemos a intentarlo?',
  MY_BUSINESS_TYC_ERROR_BUTTON: 'Reintentar',
  MY_BUSINESS_TYC_ERROR_LINK_HELP: 'Necesito ayuda',
  MY_BUSINESS_LINK_PAYMENT_ONBOARDING_TITLE:
    'Creá un link de pago y cobrá\ndesde cualquier lugar',
  MY_BUSINESS_LINK_PAYMENT_ONBOARDING_FIRST_ITEM:
    'Es muy fácil, lo hacés en un minuto y lo podés compartir con quién quieras.',
  MY_BUSINESS_LINK_PAYMENT_ONBOARDING_SECOND_ITEM:
    'Pueden pagarte desde donde sea, con Visa, Mastercard, Diners o Cabal.',
  MY_BUSINESS_LINK_PAYMENT_ONBOARDING_THIRD_ITEM:
    'Y lo mejor: ¡No te cobramos ninguna comisión en los primeros 3 meses!',
  MY_BUSINESS_LINK_PAYMENT_V3_ONBOARDING_FIRST_ITEM:
    'Es fácil, rápido y te pueden pagar con Visa, Mastercard, Diners o Cabal.',
  MY_BUSINESS_LINK_PAYMENT_V3_ONBOARDING_SECOND_ITEM:
    'Y lo mejor: ¡No pagás comisión por los primeros 3 meses!',
  MY_BUSINESS_ACCESIBILITY_TRANSACTION_PAYMENT_LINK_LABEL: 'Crear nuevo link',
  MY_BUSINESS_ACCESIBILITY_TRANSACTION_PAYMENT_LINK_HINT:
    'Redirecciona a pantalla para ingresar monto y crear link de pago',
  MY_BUSINESS_ACCESIBILITY_TRANSACTION_ITEM_PAYMENT_LINK_HINT:
    'Tu listado de links creados',
  MY_BUSINESS_ACCESIBILITY_TRANSACTION_ITEM_PAYMENT_LINK_LABEL:
    'Ir al detalle del link',
  MY_BUSINESS_ACCESIBILITY_EMPTY_PAGE_PAYMENT_LINK_HINT_VIEW:
    'Todavia no hay links de pago creados',
  STATUS_PAYMENT_LINK_EXPIRED: 'expired',
  STATUS_PAYMENT_LINK_CONFIRMED: 'confirmed',
  STATUS_PAYMENT_LINK_REJECTED: 'rejected',
  STATUS_PAYMENT_LINK_PENDING: 'pending',
  MY_BUSINESS_TITLE_LIST_LINKS: 'Historial de links',
  MY_BUSINESS_TITLE_PAYMENT_METHODS: 'Medios de pago aceptados',
  MY_BUSINESS_EXPIRE_PAYMENT_METHODS: 'Este link expira el ',
  MY_BUSINESS_EXPIRE_PAYMENT_METHODS_V3: 'Este link expira ',
  MY_BUSINESS_EXPIRE_DESCRIPTION_PAYMENT_METHODS: ' a las ',
  MY_BUSINESS_EXPIRE_HOURS_PAYMENT_METHODS: '23.59 h ',
  MY_BUSINESS_PAYMENT_LINK_STATUS_CONFIRMED: 'Cobrado',
  MY_BUSINESS_PAYMENT_LINK_STATUS_EXPIRED: 'Expirado',
  MY_BUSINESS_PAYMENT_LINK_STATUS_REJECTEDD: 'Rechazado',
  MY_BUSINESS_PAYMENT_LINK_STATUS_CONFIRMED_DESCRIPTION:
    'Ya cobraste con este link.',
  MY_BUSINESS_PAYMENT_LINK_STATUS_EXPIRED_DESCRIPTION:
    'El link ya expiró, pero podés crear uno nuevo.',
  QR_PAYMENT_ONBOARDING_TITLE_ACC: 'Empezá a cobrar con Q R',
  SELL_PHONE_RECHARGE_ONBOARDING_TITLE_ACC: 'Ganá plata vendiendo recargas',
  REPORTS_ONBOARDING_TITLE_ACC: 'Toda la info de tus ventas en el mismo lugar',
  LINK_PAYMENT_ONBOARDING_TITLE_ACC:
    'Creá un link de pago y cobrá desde cualquier lugar',
  MY_BUSINESS_LIFETIME_EXPIRED_TEXT_QR_ACC:
    'El tiempo de lectura del Q R venció.',
  MY_BUSINESS_GO_TO_OPEN_QR_ACC: 'Ir a código Q R abierto',
  MY_BUSINESS_TAXES: 'Información fiscal',
  MY_BUSINESS_TAXES_ONBOARDING_TITLE: 'Tu información fiscal en un solo lugar',
  MY_BUSINESS_TAXES_ONBOARDING_FIRST_ITEM:
    'Conocé los datos fiscales que usamos para calcular los impuestos que te retenemos.',
  MY_BUSINESS_TAXES_ONBOARDING_SECOND_ITEM:
    'Cargá las exclusiones y excenciones que apliquen de acuerdo a tu condición fiscal.',
  MY_BUSINESS_TAXES_ERROR_PAGE_TITLE: 'No pudimos mostrar los datos',
  MY_BUSINESS_TAXES_ERROR_PAGE_DESCRIPTION:
    'Intentalo de nuevo, por favor. Si el problema persiste, te pedimos que vuelvas en unos minutos.',
  MY_BUSINESS_TAXES_ERROR_PAGE_BUTTON: 'Reintentar',
  MY_BUSINESS_TAXES_INFO_TEXT:
    'Recordá mantener actualizada tu condición fiscal frente a AFIP para evitar retenciones de impuestos más altos. Cuando modifiques tu situación fiscal en AFIP, esta información se actualizará automáticamente.',
  MY_BUSINESS_TAXES_SNACKBAR_NO_UPDATE:
    'No hubo cambios en tu condición fiscal.',
  MY_BUSINESS_TAXES_SNACKBAR_SUCCESS_UPDATE:
    'La información se actualizó correctamente.',
  MY_BUSINESS_EMPTY_BALANCE_DESCRIPTION:
    'Ahora no podemos mostrar el balance. Por favor, volvé\nmás tarde.',
  MY_BUSINESS_TITLE_BALANCE: 'Balance de ventas',
  MY_BUSINESS_SUBTITLE_BALANCE: 'ventas realizadas',
  MY_BUSINESS_SERVICE_INFO_BALANCE: 'Servicio de Personal Pay',
  MY_BUSINESS_TAX_INFO_BALANCE: 'Retenciones impositivas',
  MY_BUSINESS_TITLE_MODAL_BALANCE: 'Ver mi balance de ventas de:',
  MY_BUSINESS_BALANCE_DAILY_RANGE: 'daily',
  MY_BUSINESS_BALANCE_WEEKLY_RANGE: 'weekly',
  MY_BUSINESS_BALANCE_MONTHLY_RANGE: 'monthly',
  MY_BUSINESS_BALANCE_DAILY_RANGE_LABEL: 'Hoy',
  MY_BUSINESS_BALANCE_WEEKLY_RANGE_LABEL: 'Esta semana',
  MY_BUSINESS_BALANCE_MONTHLY_RANGE_LABEL: 'Este mes',
  MY_BUSINESS_BALANCE_BUTTON_MODAL: 'Aplicar',
  MY_BUSINESS_GROSS_INCOME_INFO_TEXT:
    'Tené en cuenta que se pueden aplicar retenciones en jurisdicciones en las que no estés inscripto. Para evitar que puedan ser más altas, inscribite en todas las jurisdicciones en las que operes.',
  MY_BUSINESS_GROSS_INCOME_BUTTON_FOOTER: '¿Qué hago si no estoy inscripto?',
  MY_BUSINESS_GROSS_INCOME_MODAL_INFO:
    'Podés inscribirte en la provincia correspondiente y esperar al mes siguiente para que tu condición se actualice automáticamente.\n\nTené en cuenta que si no lo hacés, las retenciones que apliquemos a tus cobros pueden ser más altas.',
  MY_BUSINESS_GROSS_INCOME_TITLE_EMPTY_PAGE: 'No tenés ninguna inscripción',
  MY_BUSINESS_GROSS_INCOME_DESCRIPTION_EMPTY_PAGE:
    'Dependiendo de tu condición fiscal y las reglamentaciones de cada provincia, podríamos aplicarte este impuesto. Si en algún momento te lo aplicamos, desde acá verás las jurisdicciones en las que estás inscripto y en las que no.',
  MY_BUSINESS_QR_PAYMENT_INTENTION_ERROR_TITLE: 'No pudimos cobrar con QR',
  MY_BUSINESS_QR_PAYMENT_INTENTION_ERROR_DESCRIPTION:
    'Volvé a generarlo y pedile a tu cliente que vuelva a escanearlo.',
  QR_REFUND_MODAL_TITLE: 'Vas a devolver ',
  QR_REFUND_MODAL_DESCRIPTION:
    'El dinero se acreditará de inmediato en la cuenta del cliente.',
  PAYMENT_LINK_MODAL_TITLE: 'Vas a devolverle ',
  PAYMENT_LINK_REFUND_MODAL_DESCRIPTION:
    'El dinero se acreditará de inmediato en la cuenta de tu cliente.',
  QR_REFUND_MODAL_MOTIVE_OPTIONAL: 'Motivo (opcional)',
  QR_REFUND_MODAL_PLACEHOLDER: 'Devolución por pedido del comprador',
  QR_BUTTON_CONFIRM: 'Confirmar',
  MY_BUSINESS_PROFILE: 'Perfil',
  MY_BUSINESS_PROFILE_TITLE_UNREGISTERED: 'Todavía no estás inscripto en AFIP',
  MY_BUSINESS_PROFILE_DESCRIPTION_UNREGISTERED:
    '¡Inscribite y prevení retenciones mayores!\n\nComo agentes de retención, aplicamos retenciones a partir de cierto número de ventas.\n\nTe recomendamos inscribirte en AFIP para evitar impuestos más altos de los que te corresponden.',
  MY_BUSINESS_PROFILE_DESCRIPTION_REGISTERED:
    'Cada cobro que hagas está sujeto a estas retenciones de impuestos:',
  MY_BUSINESS_PROFILE_FIRST_ROW: 'Rubro o actividad',
  MY_BUSINESS_PROFILE_SECOND_ROW: 'Espacio comercial',
  MY_BUSINESS_PROFILE_THIRD_ROW: 'Dirección',
  MY_BUSINESS_PROFILE_GROSS_INCOME: 'Ingresos Brutos',
  MY_BUSINESS_PROFILE_IVA: 'IVA',
  MY_BUSINESS_PROFILE_LABEL: 'Ver más sobre Condición fiscal',
  MY_BUSINESS_PHONE_RECHARGE_VIEW_TYC: 'Ver términos y condiciones',
  SELECT_PRODUCT_TITLE_B2B: 'Elegí la compañía',
  MY_BUSINESS_SELECT_PHONE_NUMBER_TITLE: 'Escribí el número',
  MY_BUSINESS_SELECT_PHONE_NUMBER_HINT: 'Sin el 0 y sin el 15',
  MY_BUSINESS_SELECT_AMOUNT_B2B: 'Elegí el importe',
  MY_BUSINESS_BALANCE_NET_INCOME: 'Ganancia neta',
  MY_BUSINESS_PRODUCT_ALL_RANGE_LABEL: 'Todas',
  MY_BUSINESS_PRODUCT_RECHARGE_RANGE_LABEL: 'Recargas',
  MY_BUSINESS_PRODUCT_QR_RANGE_LABEL: 'QR',
  MY_BUSINESS_MONTHLY_TITLE_FILTER_REPORT: 'Tus reportes mensuales',
  MY_BUSINESS_GENERATE_BUTTON_REPORT: 'Generar nuevo reporte',
  MY_BUSINESS_GENERATE_EMPTY_DESCRIPTION_REPORT_WEEKLY:
    'Todavía no generaste reportes semanales.\nCuando los generes, los vas a poder ver acá.',
  MY_BUSINESS_WEEKLY_TITLE_FILTER_REPORT: 'Tus reportes semanales',
  MY_BUSINESS_DAILY_TITLE_FILTER_REPORT: 'Tus reportes diarios',
  MY_BUSINESS_CONFIRM_GENERATE_BUTTON_REPORT: 'Confirmar',
  MY_BUSINESS_GENERATE_EMPTY_DESCRIPTION_REPORT_DAILY:
    'Todavía no generaste reportes diarios.\nCuando los generes, los vas a poder ver acá.',
  MY_BUSINESS_GENERATE_EMPTY_DESCRIPTION_REPORT_MONTHLY:
    'Todavía no generaste reportes mensuales.\nCuando los generes, los vas a poder ver acá.',
  MY_BUSINESS_ERROR_TITLE_TAX_CONDITION: 'Tu condición fiscal',
  MY_BUSINESS_ERROR_DESCRIPTION_TAX_CONDITION:
    'En este momento no podemos mostrar tu información fiscal. Por favor, volvé más tarde',
  MY_BUSINESS_TITLE_MODAL_STORE: 'Elegí según tu situación:',
  MY_BUSINESS_MODAL_STORE_FIRST_RADIO_BUTTON:
    'Vendo / presto servicios en un local',
  MY_BUSINESS_MODAL_STORE_SECOND_RADIO_BUTTON: 'No trabajo en un local físico',
  MY_BUSINESS_MODAL_DESCRIPTION:
    'Importante: esto tiene carácter de **declaración jurada**.',
  MY_BUSINESS_MODALS_BUTTON: 'Guardar cambios',
  MY_BUSINESS_WITH_STORE_STREET: 'Con local a la calle',
  MY_BUSINESS_WITHOUT_STORE_STREET: 'Sin local a la calle',
  MY_BUSINESS_TITLE_MODAL_RUBRO:
    'Elegí el que mas se adapte al negocio que tenés.',
  MY_BUSINESS_TITLE_MODAL_NAME: 'Modificar nombre',
  MY_BUSINESS_DESCRIPTION_MODAL_NAME:
    'Este nombre van a ver sus clientes en el detalle de sus movimientos.',
  MY_BUSINESS_TITLE_INPUT_NAME: 'Nombre del negocio',
  MY_BUSINESS_MAIN_ONBOARDING_FEEDBACK_BUTTON_QR_KIT_ACTIVATION_FLOW:
    'Continuar',
  MY_BUSINESS_QR_KIT_ACTIVATION_NAVBAR_TITLE: 'Activar kit QR',
  MY_BUSINESS_QR_KIT_ACTIVATION_TITLE: 'Ingresá el código de 6 dígitos',
  MY_BUSINESS_QR_KIT_ACTIVATION_DESCRIPTION:
    'El mismo se encuentra ubicado debajo del QR que escaneaste.',
  MY_BUSINESS_QR_KIT_ACTIVATION_ERROR_MESSAGE:
    'El código ingresado es incorrecto.',
  MY_BUSINESS_QR_KIT_ACTIVATION_BUTTON: 'Activar',
  MY_BUSINESS_QR_SMARTPOS_LINK_DESCRIPTION: 'Estamos preparando la vinculación',
  MY_BUSINESS_SEE_LINKS_LIST: 'Ver listado de links',
  MY_BUSINESS_PROTECT_YOUR_SELLS: 'Conocé cómo proteger tu venta',
  MY_BUSINESS_MODAL_CHARGEBACK_TITLE: '¡Vendé con seguridad!',
  MY_BUSINESS_MODAL_CHARGEBACK_SUBTITLE:
    'Para que puedas disputar cualquier contracargo,\nte recomendamos recopilar:',
  MY_BUSINESS_MODAL_CHARGEBACK_NOT_SHOW_AGAIN: 'No volver a mostrar',
  MY_BUSINESS_MODAL_CHARGEBACK_MORE_INFO: 'Ver más sobre Desconocimiento',
  MY_BUSINESS_NAVBAR_TITLE_RECHARGE_V3: 'Vender recargas',
  MY_BUSINESS_PROMOTION_DESCRIPTION_RECHARGE_V3:
    'Por esta recarga ¡tu cliente se lleva un **30% extra!**',
  MY_BUSINESS_UPDATE_AMOUNT_RECHARGE_V3: 'Ingresar otro importe',
  MY_BUSINESS_SELECT_PHONE_NUMBER_TITLE_RECHARGE_V3: 'Escribí el número',
  MY_BUSINESS_SELECT_PHONE_NUMBER_LEGEND_RECHARGE_V3: 'Sin el 0 y sin el 15',
  MY_BUSINESS_SELECT_PHONE_NUMBER_BUTTON_RECHARGE_V3: 'Continuar',
  MY_BUSINESS_PROMOTION_RECHARGE: '30% extra',
  MY_BUSINESS_ONBOARDING_FIRST_SLIDE_TITLE_RECHARGE_V3: `Vendé recargas de celular, ¡cuando quieras y a quien quieras!`,
  MY_BUSINESS_PHONE_RECHARGE_ONBOARDING_SECOND_ITEM_V3:
    'Y si vendés recargas de Personal, ¡tu cliente recibe un 30% extra!',
  MY_BUSINESS_CONTEXTUAL_ONBOARDING_FRIST_STEP:
    '¡Cobrá sin costo!**Te bonificamos la comisión por 3 meses desde que generás tu QR.',
  MY_BUSINESS_CONTEXTUAL_ONBOARDING_SECOND_STEP:
    '¡Todo sobre impuestos, acá!**Editá tu perfil y conocé cómo aplicamos retenciones impositivas.',
  MY_BUSINESS_CONTEXTUAL_ONBOARDING_THIRD_STEP:
    'Y también tenés este menú**Donde además podés ver tus reportes y la sección de ayuda.',
  MY_BUSINESS_TITLE_MODAL_UPDATE_BUSINESS_DATA: 'Actualizá tu perfil',
  MY_BUSINESS_DESCRIPTION_MODAL_UPDATE_BUSINESS_DATA:
    'Para mejorar tu experiencia en Mi negocio,\nsolo necesitamos un dato.\n\n¡Hacelo en segundos!',
  MY_BUSINESS_PRIMARY_BUTTON_MODAL_UPDATE_BUSINESS_DATA: 'Completar ahora',
  MY_BUSINESS_SECONDARY_BUTTON_MODAL_UPDATE_BUSINESS_DATA: 'No soy comerciante',
  MY_BUSINESS_TITLE_UPDATE_BUSINESS_DATA: 'Elegí una opción según tu condición',
  MY_BUSINESS_CONFIRM: 'Confirmar',
  MY_BUSINESS_TITLE_MODAL_INFO_BUSINESS_DATA:
    '¿Por qué necesitamos esta información?',
  MY_BUSINESS_DESCRIPTION_INFO_UPDATE_BUSINESS_DATA:
    'Este dato nos ayuda a ofrecerte una experiencia más personalizada, para puedas aprovechar al máximo los beneficios que tenemos para vos.',

  //EXTRA PAY HOME V2
  EXTRA_PAY_RATES_INTEREST: 'Tasas de interés*',
  EXTRA_PAY_RATES_B48: 'Antes de las',
  EXTRA_PAY_RATES_A48: 'Luego de las',
  EXTRA_PAY_RATES_TOTAL: 'Tasa a la fecha',
  EXTRA_PAY_RATES_TNA: '*La Tasa Nominal Anual (TNA) puede variar.',
  EXTRA_PAY_EMPTY_MOVEMENTS: 'Acá vas a ver tus consumos de\nExtra Pay.',
  EXTRA_PAY_MOVEMENTS_TITLE: 'Última actividad',
  EXTRA_PAY_MOVEMENTS_TITLE_VIEW_MORE: 'Ver toda mi actividad',
  EXTRA_PAY_ACCUMULATION_CREDIT_TITLE: 'Estás acumulando cargos',
  EXTRA_PAY_ACCUMULATION_CREDIT_DESC:
    'Consultá el monto y los detalles en la sección “Última actividad”',
  EXTRA_PAY_OP_DETAIL_ERROR_TITLE: 'Parece que hubo un problema',
  EXTRA_PAY_OP_DETAIL_ERROR_SUBTITLE:
    'En este momento no podemos mostrar\nla información. Intentalo nuevamente\nen unos minutos',
  EXTRA_PAY_OP_DETAL_COSTS_TITLE: 'Cargos acumulados',
  EXTRA_PAY_OP_DETAIL_APPLY_RATE: 'Tasa aplicada',
  EXTRA_PAY_OP_NUMBER: 'Número de operación',
  EXTRA_PAY_SNACK_BAR_COPY: 'Número de operación copiado al portapapeles',

  //EXTRA PAY ONBOARDING V2

  EXTRA_PAY_ON_BOARDINGV2_TITLE: '¡Extra Pay te salva\ncuando lo necesites!',
  EXTRA_PAY_ON_BOARDINGV2_I2:
    'Podés pagar servicios, hacer\nrecargas y realizar compras.',
  EXTRA_PAY_ON_BOARDINGV2_I3:
    'La devolvés cuando cargás tu\nbilletera nuevamente.',
  EXTRA_PAY_TYC_TITLEV2: '¡Comenzá a usar\nExtra Pay !',
  EXTRA_PAY_TYC_TITLE_BACKDROP: 'Términos y condiciones',
  EXTRA_PAY_CP_TITLE_BACKDROP: 'Condiciones Particulares',

  //EXTRA PAY HOME
  EXTRA_PAY_TITLE_CAROUSEL: '¿Qué es Extra pay?',
  // EXTRA PAY STACK
  EXTRA_PAY_PUSH_SCREEN: '¡Ya tenés disponible\nExtra Pay!',
  EXTRA_PAY_PUSH_SCREEN_DESCRIPTION:
    'Encontrá esta nueva funcionalidad\nen la pantalla de inicio.',
  EXTRA_PAY_TOOLTIP:
    'En este lugar encontrá todo lo relacionado a tu saldo Extra pay',
  // EXTRA PAY DESACTIVATE
  EXTRA_PAY_DESACTIVATE_TITLE_1:
    '¿Estás seguro que querés\ndesactivar Extra Pay?',
  EXTRA_PAY_DESACTIVATE_SUBTITLE_1:
    'Si lo desactivas pero ya lo usaste, \ndevolves el extra pay cuando \ncargás tu cuenta Personal Pay.',
  EXTRA_PAY_DESACTIVATE_SUBTITLE_2:
    'Para desactivar extra pay comunicate \ncon soporte.',
  EXTRA_PAY_CONTACT_US: 'Contactate con nosotros',
  EXTRA_PAY_DISABLED_SUCCESS_TITLE: 'Extra Pay se desactivó \ncon éxito',
  EXTRA_PAY_DISABLED_SUBTITLE:
    'Ya no vas a ver el boton de extra pay en la pantalla de inicio.',
  EXTRA_PAY_GOBACK_HOME: 'Volver al inicio',
  EXTRA_PAY_DESACTIVATED: 'Desactivaste extra pay',
  EXTRA_PAY_DESACTIVATED_SUB:
    'Pero no te preocupes te vamos a\n avisar cuando puedas\n volver a usarlo.',

  // EXTRA PAY ACTIVATE
  EXTRA_PAY_ACTIVATE_SUB1:
    'Podés activar o desactivar este \nbeneficio cuando lo necesites.',
  EXTRA_PAY_ACTIVATE_SUB2:
    'Encontrá esta nueva funcionalidad \nen la pantalla de inicio.',

  // EXTRA PAY STORIES
  EXTRA_PAY_STORY_1_TITLE: 'Extra Pay te salva\ncuando te quedás sin saldo',
  EXTRA_PAY_STORY_1_SUBTITLE_1:
    'para usar en la app\ncuando te quedás sin saldo.',
  EXTRA_PAY_STORY_1_SUBTITLE_2: 'Podés usarlo las veces que quieras.',
  EXTRA_PAY_STORY_2_TITLE: 'Usá Extra Pay\npara…',
  EXTRA_PAY_STORY_2_SUBTITLE_1:
    'Hacer recargas de celu y\ntransporte en cualquier momento.',
  EXTRA_PAY_STORY_2_SUBTITLE_2: 'Pagar un servicio.',
  EXTRA_PAY_STORY_2_SUBTITLE_3:
    'Realizar compras de manera online o\nen comercios.',
  EXTRA_PAY_STORY_3_TITLE: 'Lo devolvés cuando\ncargás la billetera',
  EXTRA_PAY_STORY_3_SUBTITLE_1:
    'Devolvelo cuando ingreses plata en\nPersonal Pay.',
  EXTRA_PAY_STORY_3_SUBTITLE_2: 'Usálo cuando quieras.',
  EXTRA_PAY_DISABLE_BENEFIT_BUTTON: 'Desactivar este beneficio',
  EXTRA_PAY_TYC: 'términos y condiciones',
  EXTRA_PAY_MONEYBAR_NO_AMOUNT: 'Ya no tenés saldo extra pay',
  EXTRA_PAY_MONEYBAR_NOT_USE: 'Aún no usaste extra pay',
  EXTRA_PAY_MONEYBAR_AVAILABLE_V2: 'Saldo disponible',
  EXTRA_PAY_ADD_CASH_IN: 'Ingresar plata a la billetera',

  // EXTRA PAY DESACTIVATE
  EXTRA_PAY_DESACTIVATE_GRAPHIC_TITLE: '¡Activá Extra Pay!',
  EXTRA_PAY_DESACTIVATE_GRAPHIC_DESCRIPTION:
    'Usá plata extra en tu billetera para operar como quieras.',

  //EXTRA PAY ERROR ENDPOINT
  EXTRA_PAY_ERROR_BALANCE_TITLE: 'En breve podrás ver tu saldo',
  EXTRA_PAY_ERROR_BALANCE_SUBTITLE: 'Esto puede tardar unos minutos',

  // EXTRA PAY TYC
  EXTRA_PAY_TYC_TITLE: '¡Empezá a usar\nextra pay !',
  EXTRA_PAY_TYC_ITEM1:
    'Para poder usar extra pay por favor aceptá los terminos y condiciones',
  EXTRA_PAY_TYC_PRIMARY_BUTTON: 'Aceptar y continuar',
  EXTRA_PAY_TYC_SECONDARY_BUTTON: 'Términos y Condiciones',
  EXTRA_PAY_CP_SECONDARY_BUTTON: 'Condiciones particulares',
  EXTRA_PAY_TYC_CHECKBOX_TEXT: 'Acepto los términos y condiciones',
  EXTRA_PAY_BUTTON_ACCEPT: 'Activar Extra Pay',
  EXTRA_PAY_TYC_RATES_TITLE: 'Tasas vigentes',
  EXTRA_PAY_TYC_RATES_TNA_DESC: 'Tasa Nominal Anual',
  EXTRA_PAY_TYC_RATES_TEA_DESC: 'Tasa Efectiva Anual',
  EXTRA_PAY_TYC_RATES_CFT_DESC: 'Costo Financiero\nTotal Efectivo Anual',

  // EXTRA PAY BACKDROP CONFIG
  EXTRA_PAY_BACKDROP_TITLE: 'Configurar Extra Pay',
  EXTRA_PAY_BACKDROP_ACTIVE: 'Activar Extra Pay',
  EXTRA_PAY_BACKDROP_SAVE: 'Guardar cambios',

  //EXTRA PAY V2 ERRORS
  EXTRA_PAY_ERROR_ACTIVATE_TITLE: 'No pudimos activar\nExtra Pay',
  EXTRA_PAY_ERROR_DESACTIVATE_TITLE: 'No pudimos desactivar\nExtra Pay',
  EXTRA_PAY_ERROR_ACTIVATE_SUBTITLE: 'Intentalo nuevamente más tarde.',
  EXTRA_PAY_ERROR_ACCEPT_TYC_TITLE: 'Parece que hubo un problema',
  EXTRA_PAY_ERROR_ACCEPT_TYC_SUBTITLE:
    'En este momento no podemos mostrar la información. Intentalo nuevamente en unos minutos',

  EXTRA_PAY_TITLE_WALLET: 'Extra Pay',

  // EXTRA PAY MODAL
  EXTRA_PAY_TITLE_MODAL_HOME: '¡Tenés saldo Extra Pay para usar!',
  EXTRA_PAY_BUTTON_MODAL: 'Conocer más',

  // BNPL

  BNPL_HOME_LIST_EXPIRATION_TITLE: 'Próximas cuotas',
  BNPL_HOME_LIST_EXPIRATION_BTN_LABEL: 'Ver más',
  BNPL_HOME_LIST_EXPIRATION_EMPTY_STATE:
    'Nada por aquí, recordá que podés tenés dinero \n disponible para comprar en 3 y 6 cuotas',
  BNPL_CREDITS_TITLE: 'Créditos',
  BNPL_CREDITS_EMPTY_STATE:
    'Acá vas a ver tus compras con QR en cuotas.\n¡Aprovechá ahora!',
  BNPL_GASTADO_TITLE: 'Usado',
  BNPL_ITEM_CAROUSEL_WALLET: 'Cuotas Pay',
  BNPL_TITLE_WALLET_CAROUSEL: 'Pago en cuotas',
  BNPL_SINGLE_PAYMENT: 'Pago único',
  BNPL_TITLE_QR_TITLE_DETAIL: 'Total de la compra',
  BNPL_BUTTON_QR_DETAIL: 'Pagar en cuotas',
  BNPL_CHECKOUT_QR_DETAIL_T1: 'Monto de la cuota',
  BNPL_CHECKOUT_QR_DETAIL_T2: 'Débito primera cuota',
  BNPL_CHECKOUT_QR_DETAIL_T3: 'Número de cuotas',
  BNPL_CHECKOUT_QR_DETAIL_T4: 'Modalidad de pago',
  BNPL_CHECKOUT_QR_DETAIL_T5: 'T.N.A',
  BNPL_CHECKOUT_QR_DETAIL_T6: 'C.F.T.E.A',
  BNPL_NEXT_PAYMENT: 'Próxima cuota',
  BNPL_CHECKOUT_QR_BUTTON_CONTINUE: 'Continuar',
  BNPL_VIEW_MORE: 'Ver más',
  BNPL_CREDIT_DETAIL_TITLE_DROPDOWN: 'Detalle del crédito',
  BNPL_NEXT_PAYMENT_TITLE: 'Próximo pago:',
  BNPL_BUTTON_MODAL: 'Conocer más',
  BNPL_TITLE_MODAL_HOME: '¡Tenés crédito para comprar en cuotas!',
  BNPL_CP_TITLE: 'Condiciones particulares',
  BNPL_TYC_TITLE: 'Terminos y condiciones',
  BNPL_TYC_TITLE_UPPER: 'Terminos y Condiciones',
  BNPL_IVA_DETAIL:
    '*IVA 21% incluye el IVA asociado al interés + IVA asociado a interés punitorio',
  BNPL_INSUFFICIENT_AMOUNT: 'Tu saldo es insuficiente',
  BNPL_TIMEOUT_FETCH: 'No es posible utilizar este medio de pago',
  BNPL_ONBOARDING_TYC_TITLE: 'Términos y Condiciones',
  BNPL_ONBOARDING_PARTIAL_TYC_TEXT: 'Acepto los ',
  BNPL_ONBOARDING_TYC_TEXT_ACCEPT: 'Términos y Condiciones',

  // FINANCES
  MY_FINANCES_TITLE_PANEL: '¡Tu plata crece!',
  MY_FINANCES_SUBTITLE_PANEL: 'Multiplicá tu dinero\ntodos los días.',
  MY_FINANCES_TASA_T1: 'Tasa',
  MY_FINANCES_TASA_T2: 'anual',
  MY_FINANCES_HEADER_TITLE: 'Ahorros',
  MY_FINANCES_CAROUSEL_HOME_TITLE: 'Organizá tus ahorros con Personal Pay',
  MY_FINANCES_HOME_CAROUSEL_D1: 'Meta de ahorro\npersonalizada',
  MY_FINANCES_HOME_CAROUSEL_D2: 'Educación\nfinanciera',
  MY_FINANCES_TYC_TITLE: '¡Potenciá tus finanzas!',
  MY_FINANCES_TYC_ITEM_1:
    'Toda la plata que ingresás se\ninvierte automáticamente.',
  MY_FINANCES_TYC_ITEM_2:
    'Además, si usás Metas de ahorro, ¡tu dinero ahí también crece!',
  MY_FINANCES_HOME_CAROUSEL_D3: 'Saldo\nremunerados',
  MY_FINANCES_HOME_V2_CAROUSEL_D1: 'Mis reintegros',
  MY_FINANCES_HOME_V2_CAROUSEL_D2: 'Educación\nfinanciera',
  MY_FINANCES_HOME_V2_CAROUSEL_D3: 'Meta de ahorro\npersonalizada',
  MY_FINANCES_TYC_ITEM: 'Usá tu dinero cuando quieras',
  MY_FINANCES_TYC_TERMS_T1: 'Acepto los',
  MY_FINANCES_TYC_TERMS_T2: 'términos y condiciones',
  MY_FINANCES_TYC_TERMS_T3: 'reglamento de gestión del fondo',
  MY_FINANCES_TYC_TERMS_T4: 'declaración jurada',
  MY_FINANCES_TYC_BUTTON: 'Hacer crecer mi plata',
  MY_FINANCES_TYC_HEADER_ITEM1: 'Tu cuenta',
  MY_FINANCES_TYC_HEADER_ITEM2: 'Meta de ahorro',
  MY_FINANCES_TYC_HEADER_ITEM3: 'ganancias',
  MY_FINANCES_DDJJ_TITLE: '¿Te impactan algunas\nde estas regulaciones?',
  MY_FINANCES_DDJJ_SUBTITLE:
    'Por lo general, pocas personas se ven\n afectadas por estas normas. Se\n completa como declaración jurada.',
  MY_FINANCES_HOME_BLOCKED_TITLE: 'Mi Plata',
  MY_FINANCES_HOME_BLOCKED_DESCRIPTION: `Muy pronto vas a poder\norganizar tu plata desde\nesta sección`,
  EARNINGS_HOME_HEADER_TITLE: 'Plata invertida',
  EARNINGS_HOME_HEADER_EMPTY_TITLE: 'En minutos podrás ver tu saldo',
  EARNINGS_HOME_HEADER_EMPTY_TEXT: 'Estamos mejorando tu experiencia.',
  EARNINGS_HOME_HEADER_PENDING_TITLE: 'Pronto tu plata va a crecer',
  EARNINGS_HOME_HEADER_PENDING_TEXT:
    'Te vamos a avisar cuando el saldo\ninvertido esté generando ganancias.',
  EARNINGS_HOME_TOOLTIP_TEXT: `Tu plata crece\ndiariamente, pero las\nganancias se acreditan\nlos días hábiles.`,
  EARNINGS_HOME_TOOLTIP_ACTION: 'no volver a mostrar',
  EARNINGS_HOME_BANNER_TITLE: 'Todavía no acumulaste ganancias',
  EARNINGS_HOME_INFO_TITLE: 'Mis ganancias',
  EARNINGS_HOME_INFO_ACTION: 'ver más',
  EARNINGS_HOME_INFO_EMPTY_STATE_TEXT: `Acá vas a ver como crece tu plata\ndiariamente.`,
  EARNINGS_HOME_INFO_TOOLTIP:
    'Toda la plata que ingresa a tu billetera\nse invierte automáticamente sin que\nhagas nada.',
  MY_FINANCES_ERROR_SCREEN_TITLE: 'No pudimos\nhacer crecer tu plata',
  EARNINGS_HOME_BANNER_SUSPENDED_TITLE: 'Tu plata dejó de crecer',
  MY_FINANCES_ERROR_SCREEN_DESCRIPTION_1:
    'Para más información podés\ncomunicarte con nuestro equipo de\nsoporte.',
  MY_FINANCES_ERROR_SCREEN_DESCRIPTION_2: 'Intentalo nuevamente más tarde',
  MY_FINANCES_ERROR_SCREEN_BUTTON_1: 'Ayuda por whatsapp',
  MY_FINANCES_ERROR_SCREEN_BUTTON_2: 'Ir al inicio',
  MY_FINANCES_REG_TITLE: 'Reglamento de gestión del fondo',
  EARNINGS_TITLE_TOTAL: 'Hasta ahora acumulaste',
  EARNINGS_HISTORY_ERROR: 'En minutos volverás a ver\n esta información.',
  EARNINGS_SUBSCRIPTION_HISTORY_SUBSCRIBED: 'Agregaste dinero a tu inversión',
  EARNINGS_SUBSCRIPTION_HISTORY_REDEMPTION: 'Sacaste dinero de tu inversión',
  EARNINGS_HISTORY_END_SCROLL:
    'LLegaste al final\n no hay más ganancias\n acumuladas',
  EARNINGS_HISTORY_CTA: 'Ver todos los movimientos',
  EARNINGS_DETAILS_TITLE: 'Ganancias obtenidas',
  EARNINGS_DETAILS_SUBTITLE: 'Tu dinero creció',
  EARNINGS_DETAILS_ITEM_DATE: 'Fecha',
  EARNINGS_DETAILS_ITEM_ID: 'Nº de la operación',
  MY_FINANCES_NOTIFICATION_SUB1:
    'Empezá ahora a invertir sin trámites ni plazos: podés usar tu plata cuando quieras.',
  MY_FINANCES_NOTIFICATION_SUB2:
    'Podés ver tus ganancias diarias y el total acumulado.',
  MY_FINANCES_NOTIFICATION_SUB3: '¡No tiene costo!',
  MY_FINANCES_NOTIFICATION_BUTTON: 'Generar ganancias',
  MY_FINANCES_NOTIFICATION_TITLE: '¡Tu plata puede \ngenerar ganancias!',
  EARNINGS_BACKDROP_TITLE: 'Configurar el crecimiento de tu plata',
  EARNINGS_BACKDROP_SUBTITLE: 'Generar ganancias',
  EARNINGS_BACKDROP_INFO: 'Podés modificar tu elección cuando quieras',
  EARNINGS_BACKDROP_BUTTON: 'Guardar Cambios',
  EARNINGS_CONFIRM_POPUP_ACTIVE_TITLE: 'Estás por dejar de invertir',
  EARNINGS_CONFIRM_POPUP_SUSPENDED_TITLE: 'Estás por volver a invertir',
  EARNINGS_CONFIRM_POPUP_TEXT:
    'Si lo hacés, los cambios pueden\ntomar hasta 48 horas en\nvisualizarse.',
  EARNINGS_CONFIRM_BUTTON: 'Confirmar',
  EARNINGS_HEADER_INFO_BUTTON_ACTIVE_TEXT:
    'Toda la plata que ingresa a tu billetera se invierte automáticamente sin que hagas nada.',
  EARNINGS_HEADER_INFO_BUTTON_SUSPENDED_TEXT:
    'Si decidís generar ganancias otra vez, toda la plata de tu billetera se va volver a invertir automáticamente.',
  EARNINGS_ACTIVITY_HEADER_INFO_BUTTON_TITLE:
    '¿Qué es un rescate y una suscripción?',
  EARNINGS_ACTIVITY_HEADER_INFO_BUTTON_TEXT:
    'Como todo tu dinero se invierte, la plata que ingresa a tu billetera se denomina "suscripción" y la que sale se considera "rescate".',

  //MY FINANCES HOME V2
  MY_FINANCES_HOME_TITLE_V2: 'Ahorros',
  MY_FINANCES_HOME_BANNER_LABEL_V2:
    '¡Invertí tu plata y hacé que crezca día a día!',
  MY_FINANCES_HOME_BANNER_BUTTON_v2: 'Empezar ahora',
  MY_FINANCES_HOME_CAROUSEL_TITLE_V2: 'Hacé más con tu plata',
  MY_FINANCES_HOME_CAROUSEL_D1_V2: 'Reintegros',
  MY_FINANCES_HOME_CAROUSEL_D2_V2: 'Consumos',
  MY_FINANCES_HOME_CAROUSEL_D3_V2: 'Metas de\nahorro',
  MY_FINANCES_HOME_CAROUSEL_D4_V2: 'Educación\nfinanciera',

  //EARNINGS V2
  EARNINGS_ONBOARDING_TITLE_V2: '¡Tu plata puede generar rendimientos!',
  EARNINGS_ONBOARDING_ITEM_1_V2:
    'Sin trámites ni plazos: toda la plata que ingresás se invierte automáticamente.',
  EARNINGS_ONBOARDING_ITEM_2_V2:
    'Podés ver tus rendimientos diarios y el total acumulado.',
  EARNINGS_ONBOARDING_ITEM_3_V2:
    'Además, si usás Metas de ahorro, ¡tu dinero ahí también crece!',
  EARNINGS_ONBOARDING_BUTTON_V2: 'Generar rendimientos',
  EARNINGS_ONBOARDING_TYC_TERMS_T1_V2: 'Acepto los ',
  EARNINGS_ONBOARDING_TYC_TERMS_T2_V2: 'Términos y condiciones',
  EARNINGS_ONBOARDING_TYC_TERMS_T3_V2: 'Reglamento de gestión del fondo ',
  EARNINGS_ONBOARDING_TYC_TERMS_T4_V2: 'y ',
  EARNINGS_ONBOARDING_TYC_TERMS_T5_V2: 'Declaración jurada',
  EARNINGS_ONBOARDING_TYC_TERMS_T6_V2: '.',
  EARNINGS_ONBOARDING_TITLE_V2: '¡Tu plata puede generar rendimientos!',
  EARNINGS_HEADER_TITLE_V2: 'Rendimientos',
  EARNINGS_ERROR_EMPTY_STATE_DESCRIPTION_V2:
    'En este momento no podemos mostrar tus rendimientos.',
  EARNINGS_ERROR_EMPTY_STATE_BUTTON_V2: 'Reintentar',
  EARNINGS_ERROR_TITLE_1_V2: 'No pudimos generar rendimientos',
  EARNINGS_ERROR_TITLE_2_V2: 'Hubo un problema con tu solicitud',
  EARNINGS_ERROR_DESCRIPTION_1_V2:
    'Para más información podés comunicarte con\nnuestro equipo de soporte.',
  EARNINGS_ERROR_DESCRIPTION_2_V2:
    'Te sugerimos volver a intentarlo\nen unos minutos.',
  EARNINGS_ERROR_PRIMARY_BUTTON_V2: 'Ir al Inicio',
  EARNINGS_ERROR_SECONDARY_BUTTON_V2: 'Ayuda por WhatsApp',
  EARNINGS_DDJJ_CHECKBOX_ACCESIBILITY_LABEL:
    'Tildar para aceptar terminos y condiciones',
  // CASHBACK

  MY_FINANCES_TITLE_CASHBACK: 'Mis reintegros',
  MY_FINANCES_SUBTITLE_CASHBACK: 'Mirá tu reintegro\nmensual acumulado.',
  CASHBACK_TITLE_LIST: 'Mis reintegros',
  CASHBACK_TITLE_EMPTY: 'Tus reintegros mensuales\naparecerán acá.',

  // INTERMEDIATE UPDATE
  INTERMEDIATE_UPDATE_TITLE: 'Notificaciones',
  INTERMEDIATE_UPDATE_SUBTITLE: 'Para continuar\nusando la app',
  INTERMEDIATE_UPDATE_RECOMMENDATION: 'Te recomendamos actualizar la app.',
  INTERMEDIATE_UPDATE_WITHIN: 'Si no la actualizas dentro de los\n',
  INTERMEDIATE_UPDATE_LIMIT_DAYS: '20 días ',
  INTERMEDIATE_UPDATE_USEIT: 'no vas a poder seguir usandola',
  INTERMEDIATE_UPDATE_BUTTON_UPDATE: 'Actualizar',
  INTERMEDIATE_UPDATE_BUTTON_CONTACT: 'Contactate con nosotros',

  // FORCED UODATE
  FORCED_UPDATE_TITLE: 'Actualizá la app',
  FORCED_UPDATE_USING:
    'Para seguir usando Personal pay\ntenés que actualizarla',
  FORCED_UPDATE_HAVE: 'tenés que actualizarla',
  FORCED_UPDATE_ERROR_TITLE: 'No pudimos actualizar la app',
  FORCED_UPDATE_ERROR_DESCRIPTION: 'Por favor intentá nuevamente.',
  FORCED_UPDATE_ERROR_BUTTON: 'Cerrar app',

  //GAMIFICATION
  GAMIFICATION_TITLE: 'Trivia Personal Pay',
  GAMIFICATION_HOW_IS_WORK: '¿Cómo funciona?',
  GAMIFICATION_WANT_TO_PLAY: 'Comenzar',

  // LTV
  LTV_BETTER_BENEFITS: '¡Vas a tener los mejores beneficios!',
  LTV_PROGRESS_TITLE: 'Progreso próximo mes',
  //MY CONSUMPTIONS
  MY_CONSUMPTIONS_PANEL_TITLE: 'Consumos del mes',
  MY_CONSUMPTIONS_CARROUSEL_TITLE: '¿Cómo funciona esto?',
  MY_CONSUMPTIONS_CARROUSEL_ITEM_1:
    'Más usás\nPersonal Pay,\n¡más beneficios\ntenés!',
  MY_CONSUMPTIONS_CARROUSEL_ITEM_2:
    'Acá vas a ir viendo\ntus consumos y\ncuánto falta para\nllegar a tu objetivo.',
  MY_CONSUMPTIONS_CARROUSEL_ITEM_3:
    'Suman tus pagos\ncon tarjeta y QR,\npago de servicios\ndesde la app, y\nrecargas de celu y\ntransporte.',
  MY_CONSUMPTIONS_ERROR_TITLE: 'En unos minutos volverás a ver tus consumos.',
  MY_CONSUMPTIONS_ERROR_DESCRIPTION: 'Estamos mejorando tu experiencia.',
  MY_CONSUMPTIONS_MODAL_TITLE:
    '¡Más usás Personal Pay, \n más beneficios tenés!',
  MY_CONSUMPTIONS_MODAL_DESCRIPTION:
    'Conocé acá cómo vienen tus \n consumos del mes.',
  //QR PAYMENT
  QR_PAYMENT_CHECKOUT_V2_CONTINUE_BUTTON: 'Pagar',
  // API CHECKOUT
  API_CHECKOUT_LOAD_TEXT: 'Estamos procesando tu pago...',
};
export const ACTION_PREPAID_CARD = {
  PREPAID_CARD_OTHER: 'other',
};

export const PERMISSIONS_MESSAGES = {
  readContacts: 'Necesitamos acceder a tu agenda para conocer a tus contactos',
  writeContacts: 'Necesitamos acceder a tu agenda para editar a tus contactos',
  files: 'Necesitamos acceder a tu sistema de archivos',
  camera: 'Necesitamos acceder a tu cámara',
  locations: 'Necesitamos permisos de localización para acceder a tu ubicación',
};

export const SNACKBAR_TYPES = {
  success: 'SUCCESS',
  info: 'INFO',
  error: 'ERROR',
};

export const SNACKBAR_MESSAGES = {
  addContact: 'Se agendó tu contacto',
};

export const RTD_MESSAGES = {
  notAvailableOfferTitle: '¡Ups, este beneficio ya no está vigente!',
  notAvailableOfferDescription:
    'Pero pronto vas a recibir más beneficios. ¡Igualmente recordá que todas tus recargas en Personal Pay tienen un 30% extra!',
  notAvailableOfferButton: 'Ir al inicio',
  firstScreenTyC: 'Términos y condiciones',
  firstScreenTyCDescription:
    'Beneficio válido únicamente para tu línea personal.\nAplica por única vez.',
  validFor: 'Promo válida por ',
  alsoWithPersonalPay: '¡Además recargando con Personal Pay\n tenés un ',
  percentage: '30% extra!',
  firstScreenButtom: 'Quiero recargar',
  unitTime: ' horas',
};

export const TRANSPORT_RECHARGE_SCREEN_TITLE = 'Recarga ';

export const ChargebackModalTexts = [
  'Nombre completo y DNI de tu cliente.',
  'Domicilio de entrega.',
  'Teléfono de contacto.',
  'Y lo mismo de quien reciba el producto.',
];

export const SMARTPOS_RESPONSE_CODE = {
  OK: 'ok',
  ALREADY_BINDED: 'F003-001-01',
  INVALID_QR_DATA: 'F003-001-02',
};
