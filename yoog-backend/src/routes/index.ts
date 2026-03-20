import { Router } from 'express';

import { authRouter } from './auth';
import { patientRouter } from './patients';
import { appointmentRouter } from './appointments';

const router = Router()

router.use('/auth', authRouter)
router.use('/patients', patientRouter)
router.use('/appointments', appointmentRouter)

export default router